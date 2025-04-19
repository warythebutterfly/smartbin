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
              font-family: 'Segoe UI', sans-serif;
              background-color: #f9f9f9;
              color: #333;
            }
  
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #fff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }
  
            .header {
              background-color: #00796b;
              color: #ffffff;
              padding: 20px;
              text-align: center;
            }
  
            .header h1 {
              margin: 0;
              font-size: 20px;
            }
  
            .content {
              padding: 20px;
            }
  
            .content p {
              margin: 8px 0;
              line-height: 1.6;
            }
  
            .footer {
              background-color: #f1f1f1;
              padding: 15px;
              text-align: center;
              font-size: 14px;
              color: #555;
            }
  
            .label {
              font-weight: bold;
              color: #00796b;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Partnership Inquiry</h1>
            </div>
            <div class="content">
              <p>Hello Team,</p>
              <p>You’ve received a new partnership request from the website contact form. Here are the details:</p>
              <p><span class="label">Name:</span> ${name}</p>
              <p><span class="label">Email:</span> ${email}</p>
              <p><span class="label">Phone:</span> ${phone}</p>
              <p><span class="label">Location:</span> ${city}, ${country}</p>
              <p><span class="label">Subject:</span> ${subject}</p>
              <p><span class="label">Message:</span></p>
              <p>${message}</p>
            </div>
            <div class="footer">
              <p>YCT PlastoGas Hub | Sustainable Partnerships for a Greener Future</p>
            </div>
          </div>
        </body>
      </html>
    `;

  return {
    html,
    mailSubject: "Yct PlastoGasHub - New Partnership Inquiry",
  };
};

export default contactFormEmailTemplate;
