# Use Hostinger Email with EmailJS (No Backend Required!)

This setup allows you to send emails using your Hostinger email (`info@ghazi-enterprises.com`) directly from your React app **without any backend server**.

## Step 1: Get Hostinger SMTP Settings

1. Log in to **Hostinger Control Panel** (hpanel.hostinger.com)
2. Go to **Email** → **Email Accounts**
3. Find `info@ghazi-enterprises.com`
4. Click on it and go to **Email Client Configuration** or **SMTP Settings**

### Standard Hostinger SMTP Settings:
- **SMTP Server:** `smtp.hostinger.com`
- **Port:** `465` (SSL) or `587` (TLS)
- **Username:** `info@ghazi-enterprises.com` (full email address)
- **Password:** Your email account password

## Step 2: Configure EmailJS with Hostinger SMTP

1. **Go to EmailJS Dashboard** → https://dashboard.emailjs.com/
2. **Email Services** → **Add New Service**
3. **Select "SMTP Server"** (not Gmail/Outlook)
4. **Enter Hostinger SMTP Details:**
   - **SMTP Server:** `smtp.hostinger.com`
   - **Port:** `465`
   - **Username:** `info@ghazi-enterprises.com`
   - **Password:** Your Hostinger email password
5. **Click "Create Service"**
6. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. **Email Templates** → **Create New Template**
2. **Template Settings:**
   - **Template Name:** "Hostinger Quote Request"
   - **Subject:** `Quote Request from {{user_name}}`
   - **To Email:** `masoodfootball@gmail.com` ⚠️ **IMPORTANT: Set this to your receiving email!**
   - **From Name:** `{{user_name}}`
   - **From Email:** `info@ghazi-enterprises.com` (your Hostinger email)
   - **Reply To:** `{{user_email}}` (customer's email)

3. **Email Content (HTML):**

Copy and paste this into the **Content** field in EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #009CA6 0%, #006B73 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .info-section { background: white; padding: 20px; margin: 15px 0; border-radius: 6px; border-left: 4px solid #009CA6; }
    .info-row { margin: 12px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
    .info-row:last-child { border-bottom: none; }
    .label { font-weight: bold; color: #009CA6; display: inline-block; min-width: 140px; }
    .value { color: #333; }
    .requirements-box { background: white; padding: 20px; margin: 15px 0; border-radius: 6px; border: 1px solid #ddd; }
    .requirements-box h3 { margin-top: 0; color: #009CA6; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
    .empty-field { color: #999; font-style: italic; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📋 New Quote Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Ghazi Enterprises</p>
    </div>
    
    <div class="content">
      <div class="info-section">
        <h2 style="margin-top: 0; color: #009CA6; font-size: 18px;">👤 Contact Information</h2>
        
        <div class="info-row">
          <span class="label">Full Name:</span>
          <span class="value">{{user_name}}</span>
        </div>
        
        <div class="info-row">
          <span class="label">Email Address:</span>
          <span class="value"><a href="mailto:{{user_email}}" style="color: #009CA6; text-decoration: none;">{{user_email}}</a></span>
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
        <p style="white-space: pre-wrap; margin: 0; color: #333; line-height: 1.8;">{{#message}}{{message}}{{/message}}{{^message}}<span class="empty-field">No specific requirements provided</span>{{/message}}</p>
      </div>
      
      <div style="background: #e8f4f5; padding: 15px; border-radius: 6px; margin-top: 20px;">
        <p style="margin: 0; color: #006B73; font-size: 14px;">
          <strong>💡 Quick Actions:</strong><br>
          Reply to this email to contact: <a href="mailto:{{user_email}}" style="color: #009CA6; font-weight: bold;">{{user_email}}</a>
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p>This quote request was submitted through the Ghazi Enterprises website contact form.</p>
      <p style="margin: 5px 0;">Date: {{date}}</p>
    </div>
  </div>
</body>
</html>
```

**Plain Text Version** (for email clients that don't support HTML):

```
═══════════════════════════════════════════════════════
           NEW QUOTE REQUEST - GHAZI ENTERPRISES
═══════════════════════════════════════════════════════

CONTACT INFORMATION
───────────────────────────────────────────────────────
Full Name:        {{user_name}}
Email Address:    {{user_email}}
Organization:     {{#organization}}{{organization}}{{/organization}}{{^organization}}Not provided{{/organization}}
Phone Number:     {{#phone}}{{phone}}{{/phone}}{{^phone}}Not provided{{/phone}}

REQUIREMENTS / QUOTE DETAILS
───────────────────────────────────────────────────────
{{#message}}{{message}}{{/message}}{{^message}}No specific requirements provided{{/message}}

───────────────────────────────────────────────────────
Reply to this email to contact: {{user_email}}
───────────────────────────────────────────────────────

This quote request was submitted through the Ghazi Enterprises 
website contact form.

Date: {{date}}
```

4. **Save** and **copy the Template ID**

## Step 4: Get Your Public Key

1. **Account** → **General**
2. Find **Public Key**
3. **Copy it**

## Step 5: Update Your .env File

Create/update `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_hostinger_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Step 6: Restart Your Dev Server

```bash
npm run dev
```

## ✅ That's It!

Now your form will:
- ✅ Send emails **from** `info@ghazi-enterprises.com` (your Hostinger email)
- ✅ Send emails **to** `masoodfootball@gmail.com` (where you receive them)
- ✅ Work **directly from React** (no backend needed!)
- ✅ Use your **Hostinger SMTP** server

## Important Notes:

1. **"To Email" in Template:** Must be set to `masoodfootball@gmail.com`, NOT `{{user_email}}`
2. **"From Email":** Set to `info@ghazi-enterprises.com` so emails come from your Hostinger email
3. **Reply To:** Set to `{{user_email}}` so replies go to the customer

## Testing:

1. Fill out the quote form on your website
2. Submit it
3. Check `masoodfootball@gmail.com` inbox
4. The email should come **from** `info@ghazi-enterprises.com`

---

**This is the easiest way - no backend server needed!** 🎉

