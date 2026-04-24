# Urban Edge Portfolio

Urban Edge is a premium social media marketing agency portfolio built with React, Vite, and Tailwind CSS. The design focuses on sleek typography, modern aesthetics, and fluid animations using Framer Motion.

This project operates completely as a **Static Single Page Application (SPA)** with no backend server required.

## Development setup

Install dependencies:
```bash
npm install
```

Run the local development server:
```bash
npm run dev
```

## Deployment & Production

Since this app operates completely without a backend (serverless), it can be hosted on any static hosting environment (Vercel, Netlify, GitHub Pages, Firebase Hosting, AWS S3, etc.).

1. **Build the production assets:**
   ```bash
   npm run build
   ```
   This will generate a `dist` directory containing your optimized HTML, CSS, and JS files.

2. **Deploy the `dist` directory:**
   Upload or point your hosting provider to the generated `dist` folder. All routing is handled client-side by React Router, so be sure your static host is configured to rewrite all paths to `index.html`.

## Setup Google Sheets Contact Form

The Contact Page is structurally configured to send its data to a Google Sheet without needing a full backend server.

1. Create a new Google Sheet.
2. In the first row, add the EXACT column headers matching the form inputs: `timestamp`, `name`, `company`, `email`, `message`.
3. Go to **Extensions > Apps Script**.
4. Paste the following script:
   ```javascript
   const sheetName = 'Sheet1';
   const scriptProp = PropertiesService.getScriptProperties();

   function initialSetup () {
     const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
     scriptProp.setProperty('key', activeSpreadsheet.getId());
   }

   function doPost (e) {
     const lock = LockService.getScriptLock();
     lock.tryLock(10000);

     try {
       const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
       const sheet = doc.getSheetByName(sheetName);

       const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
       const nextRow = sheet.getLastRow() + 1;

       const newRow = headers.map(function(header) {
         return header === 'timestamp' ? new Date() : (e.parameter[header] || '');
       });

       sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

       return ContentService
         .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
         .setMimeType(ContentService.MimeType.JSON);
     }
     catch (e) {
       return ContentService
         .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
         .setMimeType(ContentService.MimeType.JSON);
     }
     finally {
       lock.releaseLock();
     }
   }
   ```
5. Run `initialSetup` once to grant permissions.
6. In the Apps Script editor, click **Deploy > New deployment**.
7. Select **Web app**. Set "Execute as" to "Me" and "Who has access" to "Anyone".
8. Copy the generated Web App URL.
9. Open `src/components/Contact.tsx` and paste that URL into the `scriptURL` variable.

## File Structure
- `src/components/` - All UI sections isolated into reusable files (`Hero.tsx`, `About.tsx`, `Contact.tsx`, etc.).
- `src/pages/` - App pages combining components (`Home.tsx`).
- `src/App.tsx` - Base routing setup.
- `.env.example` - Stubbed env vars.
- `package.json` - Required for NPM dependencies.
- `vite.config.ts` - Vite bundler configuration.
