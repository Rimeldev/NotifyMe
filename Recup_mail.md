L’API Google Sheets est gratuite pour une utilisation personnelle, notamment le stockage d’e-mails via une intégration Next.js. Il suffit de disposer d’un compte Google et d’activer l’API sur Google Cloud. Tu ne paies rien tant que tu restes dans une utilisation raisonnable (quota généreux et suffisant pour la collecte d’e-mails).[4][7]

### Étapes pour obtenir une clé API Google Sheets

- Accède à la **Google Cloud Console** : https://console.developers.google.com/[1][9]
- Crée un projet (ou sélectionne-en un existant).[1]
- Recherche "**Google Sheets API**" dans la bibliothèque d’APIs et active-la pour le projet.[4][1]
- Dans "Identifiants", crée une nouvelle clé sous "compte de service" ou "clé API" selon le type d’intégration côté serveur.[6][1]
- Télécharge le fichier JSON si tu utilises le mode "compte de service".[2]

### Exemple d’intégration Google Sheets avec Next.js

1. **Créer une route API dans `/pages/api/saveEmail.js` qui écrit dans Google Sheets**.
2. **Installer `googleapis`** dans le projet :
   ```
   npm install googleapis
   ```
3. **Utiliser le code suivant dans ton fichier API :**
   ```js
   import { google } from 'googleapis';

   export default async function handler(req, res) {
     const { email } = req.body;
     const auth = new google.auth.GoogleAuth({
       keyFile: 'chemin/vers/ton-service-account.json',
       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
     });

     const sheets = google.sheets({ version: 'v4', auth });
     const spreadsheetId = 'TON_SPREADSHEET_ID';
     const range = 'Sheet1!A:A'; // colonne A

     await sheets.spreadsheets.values.append({
       spreadsheetId,
       range,
       valueInputOption: 'RAW',
       resource: { values: [[email]] },
     });
     res.status(200).json({ success: true });
   }
   ```
4. **Intègre ce endpoint dans ton formulaire Next.js.** Tu envoies l’e-mail via fetch à `/api/saveEmail`.

### Ressources utiles
- Google Sheets API est gratuite et recommandée pour la collecte d’e-mails.[7][4]
- Pour obtenir une clé API et le fichier JSON, suis les étapes via la Google Cloud Console.[9][1]
- Les tutoriels Python sont aussi valables pour comprendre la logique, mais privilégie l’exemple Next.js ci-dessus pour ton stack.[2]

Tu peux ainsi collecter les adresses e-mail, les stocker sans limite prédéfinie, et automatiser la gestion gratuitement avec Google Sheets.[7][4]

[1](https://www.prestashopmanager.com/fr/useful-articles/prestashop-product-management-articles/prestashop-google-drive-integration-store-manager/how-to-generate-google-api-key-for-google-spreadsheets-prestashop/)
[2](https://blog.bolablg.com/p/google-sheets-python-creer-et-partager)
[3](https://support.antsroute.com/hc/fr/articles/13609338233489-Connecter-gratuitement-Google-Sheets-et-AntsRoute)
[4](https://developers.google.com/workspace/sheets/api/guides/concepts?hl=fr)
[5](https://ai.google.dev/gemini-api/docs/api-key?hl=fr)
[6](https://cloud.google.com/docs/authentication/api-keys?hl=fr)
[7](https://latenode.com/fr/blog/google-sheets-api-what-it-is-and-how-to-use-it)
[8](https://cloud.google.com/vertex-ai/generative-ai/docs/start/api-keys?hl=fr)
[9](https://latenode.com/fr/blog/what-is-google-drive-api-and-how-to-get-a-google-drive-api-key-tutorial-and-examples)
[10](https://smashballoon.com/fr/doc/creating-a-google-api-key/)