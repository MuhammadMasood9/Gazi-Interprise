# EmailJS Setup Guide - Receive Quote Requests

This guide will help you set up EmailJS to receive quote request emails at **masoodfootball@gmail.com**.

## Step 1: Sign Up for EmailJS

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Connect Your Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (Recommended - easiest setup)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service

### For Gmail:
1. Select **Gmail**
2. Click **Connect Account**
3. Sign in with the Gmail account you want to receive emails at (use masoodfootball@gmail.com)
4. Authorize EmailJS to send emails
5. **Copy the Service ID** (you'll need this later)

### For Other Email Services:
1. Follow the provider-specific instructions
2. You may need to configure SMTP settings
3. **Copy the Service ID** when done

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Configure the template:

### Template Settings:
- **Template Name**: "Quote Request Form"
- **Subject**: `Quote Request from {{user_name}}`
- **To Email**: `masoodfootball@gmail.com` (or use `{{to_email}}` if you want it dynamic)
- **From Name**: `{{user_name}}`
- **From Email**: `{{user_email}}`
- **Reply To**: `{{user_email}}`

### Email Content:
Use this template for the email body:

```
New Quote Request Received

Name: {{user_name}}
Email: {{user_email}}
Organization: {{organization}}
Phone: {{phone}}

Requirements:
{{message}}

---
This email was sent from the Ghazi Enterprises website contact form.
```

### Template Variables:
Make sure these variables are included (they will be automatically filled from the form):
- `{{user_name}}` - Customer's full name
- `{{user_email}}` - Customer's email
- `{{organization}}` - Organization/Hospital name
- `{{phone}}` - Phone number
- `{{message}}` - Requirements/Quote details
- `{{to_email}}` - Recipient email (masoodfootball@gmail.com)

4. Click **Save**
5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. **Copy your Public Key** (you'll need this later)

## Step 5: Configure Your Website

1. Create a `.env` file in the root directory of your project (if it doesn't exist)
2. Add these variables with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

3. Save the `.env` file
4. **Restart your development server** (stop and run `npm run dev` again)

## Step 6: Test the Form

1. Open your website
2. Click "Get a Quote" button
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox at **masoodfootball@gmail.com**
6. You should receive the quote request email!

## Troubleshooting

### Emails Not Arriving?

1. **Check Spam Folder** - Sometimes emails go to spam initially
2. **Verify Service Connection** - Go to Email Services and make sure it's connected
3. **Check Template Settings** - Ensure "To Email" is set to `masoodfootball@gmail.com`
4. **Check Console** - Open browser DevTools (F12) and check for errors
5. **Verify Environment Variables** - Make sure `.env` file has correct values and server was restarted

### Common Issues:

- **"Service ID not found"** - Check your Service ID in `.env` file
- **"Template ID not found"** - Check your Template ID in `.env` file
- **"Public Key invalid"** - Verify your Public Key in `.env` file
- **Form submits but no email** - Check EmailJS dashboard for error logs

## EmailJS Free Plan Limits

- **200 emails/month** - Free tier limit
- Upgrade to paid plan for more emails if needed

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Important Notes:**
- Never commit your `.env` file to Git (it's already in `.gitignore`)
- Keep your Public Key and Service IDs secure
- Test the form after setup to ensure emails are being received

