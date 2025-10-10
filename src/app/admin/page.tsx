"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import SheetsStatusComponent from '@/components/ui/sheets-status';
import { useEmailSubmission } from '@/hooks/use-email-submission';
import { Loader2 } from 'lucide-react';

export default function AdminPage() {
  const [testEmail, setTestEmail] = useState('');
  const { isSubmitting, submitEmail } = useEmailSubmission();

  const handleTestSubmission = async () => {
    if (!testEmail) return;
    
    await submitEmail({
      email: testEmail,
      groupCount: '11-20',
      additionalInfo: 'Test depuis la page admin',
      source: 'Page Admin Test'
    });
    
    setTestEmail('');
  };

  const handleCreateHeaders = async () => {
    try {
      const response = await fetch('/api/saveEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'HEADER_ROW@test.com',
          groupCount: 'TEST',
          additionalInfo: 'Ligne d\'en-tête',
          source: 'Header Creation'
        })
      });
      
      const result = await response.json();
      console.log('Header creation result:', result);
    } catch (error) {
      console.error('Error creating headers:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Administration NotifyMe
          </h1>
          <p className="text-muted-foreground mt-2">
            Interface de test et monitoring du système Google Sheets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Test de soumission */}
          <Card>
            <CardHeader>
              <CardTitle>Test de soumission</CardTitle>
              <CardDescription>
                Tester l'enregistrement d'un email dans Google Sheets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="testEmail">Email de test</Label>
                <Input
                  id="testEmail"
                  type="email"
                  placeholder="test@example.com"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                />
              </div>
              
              <Button 
                onClick={handleTestSubmission}
                disabled={!testEmail || isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Test en cours...
                  </>
                ) : (
                  'Tester la soumission'
                )}
              </Button>

              <Button
                onClick={handleCreateHeaders}
                variant="outline"
                className="w-full"
              >
                Créer les en-têtes (première fois)
              </Button>
            </CardContent>
          </Card>

          {/* Statut du système */}
          <Card>
            <CardHeader>
              <CardTitle>Statut du système</CardTitle>
              <CardDescription>
                Monitoring de la connexion Google Sheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SheetsStatusComponent />
            </CardContent>
          </Card>
        </div>

        {/* Instructions de configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Instructions de configuration</CardTitle>
            <CardDescription>
              Étapes pour configurer Google Sheets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Variables d'environnement requises :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><code>GOOGLE_CREDENTIALS_PATH</code>: Chemin vers le fichier JSON de service account</li>
                <li><code>GOOGLE_SPREADSHEET_ID</code>: ID de votre Google Sheet</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Configuration du service account :</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Remplacez les valeurs dans <code>credentials/sage-sentry-474711-s7-58cb6a6cb5dc.json</code></li>
                <li>Mettez à jour <code>GOOGLE_SPREADSHEET_ID</code> dans <code>.env.local</code></li>
                <li>Assurez-vous que le service account a accès au Google Sheet</li>
                <li>Cliquez sur "Créer les en-têtes" pour la première utilisation</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}