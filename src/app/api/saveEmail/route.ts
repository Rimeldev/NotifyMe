import { NextRequest, NextResponse } from 'next/server';
import GoogleSheetsService, { EmailData } from '@/lib/google-sheets';
import { z } from 'zod';

// Schéma de validation pour les données d'email (simplifié)
const EmailSubmissionSchema = z.object({
  email: z.string().email('Adresse email invalide'),
  source: z.string().optional()
});

// Rate limiting simple (en production, utilisez une solution plus robuste)
const submissionTracker = new Map<string, number>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastSubmission = submissionTracker.get(ip) || 0;
  
  if (now - lastSubmission < RATE_LIMIT_WINDOW) {
    return true;
  }
  
  submissionTracker.set(ip, now);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Vérification du rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Trop de soumissions. Veuillez patienter avant de réessayer.' 
        },
        { status: 429 }
      );
    }

    // Validation des données reçues
    const body = await request.json();
    const validationResult = EmailSubmissionSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Données invalides', 
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { email, source } = validationResult.data;

    // Initialisation du service Google Sheets
    const sheetsService = GoogleSheetsService.getInstance();
    
    // En mode dev, on peut continuer sans les variables d'environnement
    if (!sheetsService.isDevMode() && (!process.env.GOOGLE_CREDENTIALS_JSON || !process.env.GOOGLE_SPREADSHEET_ID)) {
      console.error('Missing required environment variables for production mode');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Configuration serveur manquante' 
        },
        { status: 500 }
      );
    }

    // Préparation des données
    const emailData: EmailData = {
      email,
      source: source || 'Landing Page'
    };
    
    // Validation de la connexion
    const isConnected = await sheetsService.validateConnection();
    if (!isConnected) {
      console.error('Google Sheets connection failed');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Erreur de connexion au service de stockage' 
        },
        { status: 503 }
      );
    }

    // Sauvegarde de l'email
    const saved = await sheetsService.saveEmail(emailData);
    
    if (saved) {
      // Récupération du nouveau count d'emails
      const emailCount = await sheetsService.getEmailCount();
      
      return NextResponse.json({
        success: true,
        message: 'Email enregistré avec succès',
        data: {
          email,
          totalEmails: emailCount
        }
      });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Erreur lors de l\'enregistrement' 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    
    // Gestion spécifique des erreurs
    if (error instanceof Error) {
      if (error.message.includes('GOOGLE_CREDENTIALS_JSON')) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Configuration Google Sheets manquante' 
          },
          { status: 500 }
        );
      }
      
      if (error.message.includes('Credentials file not found')) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Fichier de credentials introuvable' 
          },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur interne du serveur' 
      },
      { status: 500 }
    );
  }
}

// GET endpoint pour vérifier le statut du service
export async function GET() {
  try {
    const sheetsService = GoogleSheetsService.getInstance();
    const isConnected = await sheetsService.validateConnection();
    const emailCount = await sheetsService.getEmailCount();
    
    return NextResponse.json({
      status: 'ok',
      connected: isConnected,
      totalEmails: emailCount,
      devMode: sheetsService.isDevMode(),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      { 
        status: 'error',
        connected: false,
        error: 'Service unavailable' 
      },
      { status: 503 }
    );
  }
}