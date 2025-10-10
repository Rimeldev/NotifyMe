# Configuration Google Sheets pour NotifyMe

## 🎯 Objectif
Ce guide vous explique comment configurer Google Sheets pour collecter les emails de votre landing page NotifyMe.

## 📋 Prérequis
- Un compte Google
- Accès à Google Cloud Console
- Le projet NotifyMe en cours d'exécution

## 🚀 Étapes de configuration

### 1. Créer un Google Sheet

1. Rendez-vous sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille de calcul
3. Nommez-la "NotifyMe - Emails Collectés"
4. Notez l'ID du spreadsheet depuis l'URL :
   ```
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   ```
   L'ID est : `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### 2. Configurer Google Cloud Console

1. **Accéder à Google Cloud Console**
   - Allez sur [Google Cloud Console](https://console.cloud.google.com/)
   - Créez un nouveau projet ou sélectionnez un existant

2. **Activer l'API Google Sheets**
   - Dans le menu, allez à "APIs & Services" > "Library"
   - Recherchez "Google Sheets API"
   - Cliquez sur "Enable"

3. **Créer un Service Account**
   - Allez à "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "Service Account"
   - Nommez le service account : `notifyme-sheets`
   - Description : `Service account pour collecter les emails NotifyMe`
   - Cliquez sur "Create and Continue"

4. **Télécharger les credentials**
   - Une fois créé, cliquez sur le service account
   - Allez dans l'onglet "Keys"
   - Cliquez sur "Add Key" > "Create new key"
   - Choisissez "JSON"
   - Le fichier sera téléchargé automatiquement

### 3. Configurer le projet NotifyMe

1. **Placer le fichier de credentials**
   ```bash
   # Créer le dossier credentials s'il n'existe pas
   mkdir -p /chemin/vers/NotifyMe2/credentials
   
   # Copier le fichier téléchargé
   cp ~/Downloads/votre-service-account-xxx.json /chemin/vers/NotifyMe2/credentials/
   ```

2. **Mettre à jour les variables d'environnement**
   Éditez le fichier `.env.local` :
   ```env
   # Google Sheets Configuration
   GOOGLE_CREDENTIALS_PATH=./credentials/votre-service-account-xxx.json
   GOOGLE_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
   
   # Google AI Configuration (existing)
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   ```

### 4. Donner accès au Service Account

1. **Récupérer l'email du service account**
   - Dans le fichier JSON téléchargé, trouvez le champ `client_email`
   - Exemple : `notifyme-sheets@votre-projet.iam.gserviceaccount.com`

2. **Partager le Google Sheet**
   - Ouvrez votre Google Sheet
   - Cliquez sur "Share" (Partager)
   - Ajoutez l'email du service account
   - Donnez-lui les permissions "Editor"
   - Décochez "Notify people" 
   - Cliquez sur "Send"

### 5. Initialiser le Google Sheet

1. **Ajouter les en-têtes**
   Dans votre Google Sheet, ajoutez ces en-têtes en ligne 1 :
   | A | B | C | D | E |
   |---|---|---|---|---|
   | Email | Timestamp | Source | Groupes gérés | Info supplémentaire |

2. **Ou utiliser l'API**
   Vous pouvez aussi créer les en-têtes via l'interface admin :
   - Allez sur `http://localhost:3000/admin`
   - Cliquez sur "Créer les en-têtes (première fois)"

## 🧪 Test de configuration

### Via l'interface admin
1. Redémarrez le serveur : `npm run dev`
2. Allez sur `http://localhost:3000/admin`
3. Vérifiez que le statut affiche "Connexion Google Sheets OK"
4. Testez la soumission d'un email

### Via l'API directement
```bash
# Tester le statut
curl -X GET http://localhost:3000/api/saveEmail

# Tester une soumission
curl -X POST http://localhost:3000/api/saveEmail \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","groupCount":"11-20"}'
```

### Via le formulaire
1. Allez sur `http://localhost:3000/early-access`
2. Remplissez le formulaire
3. Vérifiez que l'email apparaît dans votre Google Sheet

## 📊 Accès à vos données

Une fois configuré, vous pouvez accéder à vos emails collectés via :

**Lien Google Sheets :** `https://docs.google.com/spreadsheets/d/VOTRE_SPREADSHEET_ID/edit`

Remplacez `VOTRE_SPREADSHEET_ID` par l'ID de votre feuille.

## 🔧 Dépannage

### "Google Sheets connection failed"
- Vérifiez que l'API Google Sheets est activée
- Assurez-vous que le service account a accès au Sheet
- Vérifiez le chemin du fichier de credentials

### "Configuration serveur manquante" 
- Vérifiez que les variables d'environnement sont bien définies
- Redémarrez le serveur après modification du `.env.local`

### "Credentials file not found"
- Vérifiez le chemin du fichier JSON
- Assurez-vous que le fichier existe et est accessible

## 🎉 Félicitations !

Votre système de collecte d'emails est maintenant opérationnel ! Les emails soumis via votre landing page seront automatiquement sauvegardés dans votre Google Sheet avec :

- ✅ Email de l'utilisateur
- ✅ Timestamp de soumission
- ✅ Source (Landing Page, Admin, etc.)
- ✅ Nombre de groupes gérés
- ✅ Informations supplémentaires

## 📈 Prochaines étapes

- Configurez des alertes Google Sheets pour être notifié des nouveaux emails
- Analysez les données avec Google Data Studio
- Exportez les emails vers votre solution CRM
- Mettez en place une séquence email marketing