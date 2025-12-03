# Complete Email Template for Quote Requests

This is a professional, well-formatted email template that displays all form information properly.

## Form Fields Being Sent:

- `{{user_name}}` - Full Name (required)
- `{{user_email}}` - Email Address (required)
- `{{organization}}` - Organization / Hospital (optional)
- `{{phone}}` - Phone Number (optional)
- `{{message}}` - Requirements / Quote Details (optional)

## How to Use in EmailJS:

1. Go to **Email Templates** in EmailJS Dashboard
2. Create a new template or edit existing one
3. Select **"HTML"** as the content type
4. Copy the HTML template below into the editor
5. Make sure template settings are:
   - **To Email:** `masoodfootball@gmail.com`
   - **From Email:** `info@ghazi-enterprises.com`
   - **Reply To:** `{{user_email}}`
   - **Subject:** `Quote Request from {{user_name}}`

## Professional HTML Email Template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      margin: 0; 
      padding: 0; 
      background-color: #f4f4f4;
    }
    .email-wrapper {
      max-width: 600px; 
      margin: 20px auto; 
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header { 
      background: linear-gradient(135deg, #009CA6 0%, #006B73 100%); 
      color: white; 
      padding: 30px 20px; 
      text-align: center; 
    }
    .header h1 { 
      margin: 0; 
      font-size: 24px; 
      font-weight: 600;
    }
    .header p {
      margin: 8px 0 0 0; 
      opacity: 0.95;
      font-size: 14px;
    }
    .content { 
      padding: 30px; 
    }
    .info-section { 
      background: #f8f9fa; 
      padding: 20px; 
      margin: 20px 0; 
      border-radius: 6px; 
      border-left: 4px solid #009CA6; 
    }
    .info-section h2 { 
      margin: 0 0 15px 0; 
      color: #009CA6; 
      font-size: 18px; 
      font-weight: 600;
    }
    .info-row { 
      margin: 12px 0; 
      padding: 10px 0; 
      border-bottom: 1px solid #e0e0e0; 
      display: flex;
      align-items: flex-start;
    }
    .info-row:last-child { 
      border-bottom: none; 
    }
    .label { 
      font-weight: 600; 
      color: #009CA6; 
      min-width: 140px; 
      display: inline-block;
    }
    .value { 
      color: #333; 
      flex: 1;
    }
    .value a {
      color: #009CA6;
      text-decoration: none;
    }
    .value a:hover {
      text-decoration: underline;
    }
    .requirements-box { 
      background: #f8f9fa; 
      padding: 20px; 
      margin: 20px 0; 
      border-radius: 6px; 
      border: 1px solid #e0e0e0; 
    }
    .requirements-box h3 { 
      margin: 0 0 12px 0; 
      color: #009CA6; 
      font-size: 16px;
      font-weight: 600;
    }
    .requirements-content {
      white-space: pre-wrap; 
      color: #333; 
      line-height: 1.8;
      margin: 0;
    }
    .action-box { 
      background: #e8f4f5; 
      padding: 15px; 
      border-radius: 6px; 
      margin-top: 20px; 
      border-left: 4px solid #009CA6;
    }
    .action-box p { 
      margin: 0; 
      color: #006B73; 
      font-size: 14px; 
    }
    .action-box a {
      color: #009CA6;
      font-weight: 600;
      text-decoration: none;
    }
    .footer { 
      text-align: center; 
      margin-top: 30px; 
      padding-top: 20px; 
      border-top: 2px solid #e0e0e0; 
      color: #666; 
      font-size: 12px; 
      background: #f8f9fa;
      padding: 20px;
    }
    .empty-field { 
      color: #999; 
      font-style: italic; 
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <h1>📋 New Quote Request</h1>
      <p>Ghazi Enterprises - Medical Equipment Supplier</p>
    </div>
    
    <div class="content">
      <div class="info-section">
        <h2>👤 Contact Information</h2>
        
        <div class="info-row">
          <span class="label">Full Name:</span>
          <span class="value">{{user_name}}</span>
        </div>
        
        <div class="info-row">
          <span class="label">Email Address:</span>
          <span class="value"><a href="mailto:{{user_email}}">{{user_email}}</a></span>
        </div>
        
        <div class="info-row">
          <span class="label">Organization:</span>
          <span class="value">{{#organization}}{{organization}}{{/organization}}{{^organization}}<span class="empty-field">Not provided</span>{{/organization}}</span>
        </div>
        
        <div class="info-row">
          <span class="label">Phone Number:</span>
          <span class="value">{{#phone}}{{phone}}{{/phone}}{{^phone}}<span class="empty-field">Not provided</span>{{/phone}}</span>
        </div>
      </div>
      
      <div class="requirements-box">
        <h3>📝 Requirements / Quote Details</h3>
        <p class="requirements-content">{{#message}}{{message}}{{/message}}{{^message}}<span class="empty-field">No specific requirements provided</span>{{/message}}</p>
      </div>
      
      <div class="action-box">
        <p>
          <strong>💡 Quick Action:</strong><br>
          Click to reply: <a href="mailto:{{user_email}}">{{user_email}}</a>
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Ghazi Enterprises</strong></p>
      <p>This quote request was submitted through the website contact form.</p>
      <p style="margin-top: 8px; color: #999;">Date: {{date}} | Time: {{time}}</p>
    </div>
  </div>
</body>
</html>
```

## Simple Version (If HTML doesn't work):

If the HTML template doesn't render properly, use this simpler version:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #009CA6; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0;">New Quote Request</h1>
    <p style="margin: 8px 0 0 0;">Ghazi Enterprises</p>
  </div>
  
  <div style="background: #f9f9f9; padding: 25px; border-radius: 0 0 8px 8px;">
    <h2 style="color: #009CA6; margin-top: 0;">Contact Information</h2>
    
    <p><strong>Full Name:</strong> {{user_name}}</p>
    <p><strong>Email:</strong> <a href="mailto:{{user_email}}" style="color: #009CA6;">{{user_email}}</a></p>
    <p><strong>Organization:</strong> {{#organization}}{{organization}}{{/organization}}{{^organization}}Not provided{{/organization}}</p>
    <p><strong>Phone:</strong> {{#phone}}{{phone}}{{/phone}}{{^phone}}Not provided{{/phone}}</p>
    
    <h2 style="color: #009CA6; margin-top: 25px;">Requirements</h2>
    <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #009CA6;">
      <p style="white-space: pre-wrap; margin: 0;">{{#message}}{{message}}{{/message}}{{^message}}No specific requirements provided{{/message}}</p>
    </div>
    
    <p style="margin-top: 25px; padding: 15px; background: #e8f4f5; border-radius: 6px;">
      <strong>Reply to:</strong> <a href="mailto:{{user_email}}" style="color: #009CA6;">{{user_email}}</a>
    </p>
  </div>
  
  <p style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
    This email was sent from the Ghazi Enterprises website contact form.
  </p>
</div>
```

## Notes:

- The template uses conditional rendering: `{{#field}}{{field}}{{/field}}{{^field}}Not provided{{/field}}` to handle empty optional fields
- All form information is displayed in a clear, organized format
- The email is professional and easy to read
- Reply-to is set to the customer's email for easy response

