
Kearse Konsortium Automation Setup Guide

Contents:
- thank_you_page.html (Upload this as your Thank You page after form submission)
- email_template.html (Template for automatic emails sent to applicants)
- apps_script_code.js (Copy-paste this into Google Apps Script editor connected to your form)
- ReadMe.txt (this file)

How to Use:
1. Set up Google Form responses linked to a Google Sheet.
2. In Google Sheets, open Extensions > Apps Script, paste apps_script_code.js content.
3. Save the project and add a trigger: Function -> sendThankYouEmail, Event -> On Form Submit.
4. Customize emails as needed (e.g., contact email, website link).

Congratulations, you’re automated!
