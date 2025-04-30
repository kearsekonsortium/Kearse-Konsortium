
function sendThankYouEmail(e) {
  var email = e.namedValues['Email Address'][0];
  var name = e.namedValues['Full Name'][0];

  var subjectApplicant = "We’ve Received Your Application – Kearse Konsortium";

  var htmlMessageApplicant = `
    <div style="font-family: Arial, sans-serif;">
      <h2 style="color:#2c3e50;">Thank You, ${name}!</h2>
      <p style="color:#7f8c8d;">We’re excited to have you apply to <strong>Kearse Konsortium</strong>. We will review your application within 48 hours and reach out with next steps.</p>
      <p style="color:#7f8c8d;">Questions? Email us at 
      <a href="mailto:contact@kearsekonsortium.com" style="color:#007bff;">contact@kearsekonsortium.com</a>.</p>
      <br>
      <a href="https://yourwebsite.com" style="padding: 12px 24px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 6px;">Visit Our Website</a>
    </div>
  `;

  MailApp.sendEmail({
    to: email,
    subject: subjectApplicant,
    htmlBody: htmlMessageApplicant
  });

  var internalEmail = "kearsekonsortium@proton.me"; 
  var subjectInternal = "New Contractor Application Submitted";
  var bodyInternal = `A new contractor has applied:\n\nName: ${name}\nEmail: ${email}\n\nCheck the spreadsheet for full details.`;

  MailApp.sendEmail(internalEmail, subjectInternal, bodyInternal);
}
