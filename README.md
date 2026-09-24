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

Build for production:
```bash
npm run build
```

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

## Customizing Images & Logo via the `public/` Folder

You can easily replace images directly using the file manager by uploading files with these exact names to the `/public` folder:

1. **Official Brand Logo & Favicon**:
   - File path: `public/logo.png`
   - Used for: Header navigation bar, mobile menu, website footer, and browser tab favicon.
   - Recommended dimensions: **512 × 512 px** (or **256 × 256 px**), **1:1 Square aspect ratio**.
   - Recommended format: PNG with transparent background (or dark square background), with the "UE" emblem centered and ~10-15% padding around the edges.

2. **Founder Image (About Page)**:
   - File path: `public/founder.jpg` or `public/founder.png`
   - Used for: **Shubham Pareek**'s portrait in the "Meet the Founder" section on the About page.
   - Recommended aspect ratio: `4:5` portrait or `1:1` square (e.g., 800x1000px or 1080x1080px).

3. **About Page Agency Image**:
   - File path: `public/about-image.jpg`
   - Used for: The creative studio/team showcase in the "About Urban Edge" overview section.
   - Recommended aspect ratio: `16:9` or `4:3` landscape (e.g., 1200x800px).

Whenever you replace these files in `/public`, the application automatically renders your uploaded assets with built-in vector fallbacks if any file is temporarily missing.

## File Structure
- `src/components/` - All UI sections isolated into reusable files (`Hero.tsx`, `About.tsx`, `Contact.tsx`, etc.).
- `src/pages/` - App pages combining components (`Home.tsx`).
- `src/App.tsx` - Base routing setup.
- `.env.example` - Stubbed env vars.
- `package.json` - Required for NPM dependencies.
- `vite.config.ts` - Vite bundler configuration.
