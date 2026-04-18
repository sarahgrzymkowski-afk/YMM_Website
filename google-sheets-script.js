// ── Your Modern Matriarch — Contact Form → Google Sheets Logger ──
// 
// SETUP INSTRUCTIONS:
// 1. Go to sheets.google.com and create a new spreadsheet called "YMM Inquiries"
// 2. Click Extensions → Apps Script
// 3. Delete any existing code and paste this entire script
// 4. Click Save, then click Deploy → New deployment
// 5. Set type to "Web app", execute as "Me", access "Anyone"
// 6. Click Deploy and copy the Web App URL
// 7. Paste that URL into contact.html replacing YOUR_GOOGLE_SCRIPT_URL

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data  = JSON.parse(e.postData.contents);

    // Write headers on first row if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Submitted At', 'First Name', 'Last Name', 'Email',
        'Interest', 'Kids', 'Message'
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    sheet.appendRow([
      data.submitted_at || new Date().toISOString(),
      data.first_name   || '',
      data.last_name    || '',
      data.email        || '',
      data.interest     || '',
      data.kids         || '',
      data.message      || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight CORS
function doGet(e) {
  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT);
}
