import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

export interface EmailData {
  email: string;
  timestamp?: string;
  source?: string;
  groupCount?: string;
  additionalInfo?: string;
}

class GoogleSheetsService {
  private static instance: GoogleSheetsService;
  private auth: any;
  private sheets: any;
  private devMode: boolean = false;
  private mockData: any[] = [];

  private constructor() {
    try {
      this.initializeAuth();
    } catch (error) {
      console.warn('Google Sheets not configured, using development mode');
      this.devMode = true;
    }
  }

  static getInstance(): GoogleSheetsService {
    if (!GoogleSheetsService.instance) {
      GoogleSheetsService.instance = new GoogleSheetsService();
    }
    return GoogleSheetsService.instance;
  }

  private initializeAuth() {
    try {
      const credentialsPath = process.env.GOOGLE_CREDENTIALS_PATH;
      if (!credentialsPath) {
        throw new Error('GOOGLE_CREDENTIALS_PATH not found in environment variables');
      }

      const fullPath = path.resolve(process.cwd(), credentialsPath);
      
      if (!fs.existsSync(fullPath)) {
        throw new Error(`Credentials file not found: ${fullPath}`);
      }

      this.auth = new google.auth.GoogleAuth({
        keyFile: fullPath,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    } catch (error) {
      console.error('Error initializing Google Sheets auth:', error);
      throw error;
    }
  }

  async saveEmail(emailData: EmailData): Promise<boolean> {
    // Mode développement - stockage en mémoire
    if (this.devMode) {
      const timestamp = emailData.timestamp || new Date().toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      this.mockData.push({
        ...emailData,
        timestamp
      });
      
      console.log(`[DEV MODE] Email saved: ${emailData.email} (Total: ${this.mockData.length})`);
      return true;
    }

    try {
      const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
      if (!spreadsheetId) {
        throw new Error('GOOGLE_SPREADSHEET_ID not found in environment variables');
      }

      // Ajouter un timestamp si pas fourni
      const timestamp = emailData.timestamp || new Date().toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      // Préparer les données à insérer (format simplifié)
      const values = [
        [
          emailData.email,
          timestamp,
          emailData.source || 'Landing Page'
        ]
      ];

      const range = 'A:C'; // Colonnes A à C

      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values
        },
      });

      console.log(`Email saved to Google Sheets: ${emailData.email}`);
      return response.status === 200;
    } catch (error) {
      console.error('Error saving email to Google Sheets:', error);
      return false;
    }
  }

  async createHeaderRow(): Promise<boolean> {
    try {
      const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
      if (!spreadsheetId) {
        throw new Error('GOOGLE_SPREADSHEET_ID not found in environment variables');
      }

      const headerValues = [
        ['Email', 'Timestamp', 'Source']
      ];

      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'A1:C1',
        valueInputOption: 'RAW',
        resource: {
          values: headerValues
        },
      });

      return response.status === 200;
    } catch (error) {
      console.error('Error creating header row:', error);
      return false;
    }
  }

  async getEmailCount(): Promise<number> {
    if (this.devMode) {
      return this.mockData.length;
    }

    try {
      const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
      if (!spreadsheetId) {
        return 0;
      }

      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'A:A',
      });

      const rows = response.data.values;
      return rows ? Math.max(0, rows.length - 1) : 0; // -1 pour exclure l'en-tête
    } catch (error) {
      console.error('Error getting email count:', error);
      return 0;
    }
  }

  async validateConnection(): Promise<boolean> {
    if (this.devMode) {
      return true; // En mode développement, on considère que la connexion est OK
    }

    try {
      const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
      if (!spreadsheetId) {
        return false;
      }

      const response = await this.sheets.spreadsheets.get({
        spreadsheetId,
      });

      return response.status === 200;
    } catch (error) {
      console.error('Error validating Google Sheets connection:', error);
      return false;
    }
  }

  // Méthode pour récupérer les données en mode développement
  getMockData(): any[] {
    return this.mockData;
  }

  isDevMode(): boolean {
    return this.devMode;
  }
}

export default GoogleSheetsService;
