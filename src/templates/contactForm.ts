const contactFormEmailTemplate = function (
  name: string,
  email: string,
  country: string,
  city: string,
  phone: string,
  subject: string,
  message: string,
) {
  const html = `
        <html>
        <head>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                }
  
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
  
                .header {
                    background-color: #3498db;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                }
  
                .content {
                    padding: 20px;
                }
  
                .footer {
                    background-color: #f2f2f2;
                    padding: 10px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Contact Form Submission</h1>
                </div>
                <div class="content">
                    <p>Dear Yct PlastoGas Hub,</p>
                    <p>You have received a new message via the contact form:</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>City:</strong> ${city}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Subject:</strong></p>
                    <p>${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
                <div class="footer">
                    <p>Thank you for your attention!</p>
                </div>
            </div>
        </body>
        </html>
    `;

  return {
    html: html,
    mailSubject: "New Contact Form Submission",
  };
};

export default contactFormEmailTemplate;
