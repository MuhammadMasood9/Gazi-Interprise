# Hostinger SMTP Setup Guide

## Quick Setup (No Complex Backend Required!)

This is a **simple, single-file backend server** that handles email sending. It's minimal and easy to run.

## Step 1: Get Your Hostinger SMTP Settings

1. Log in to your **Hostinger Control Panel** (hpanel.hostinger.com)
2. Go to **Email** → **Email Accounts**
3. Find your email: `info@ghazi-enterprises.com`
4. Click on it and look for **"Email Client Configuration"** or **"SMTP Settings"**

### Hostinger SMTP Settings (Standard):
- **SMTP Host:** `smtp.hostinger.com`
- **SMTP Port:** `465` (SSL) or `587` (TLS)
- **Security:** SSL/TLS
- **Username:** Your full email address (e.g., `info@ghazi-enterprises.com`)
- **Password:** Your email account password

## Step 2: Install Dependencies

```bash
npm install nodemailer express cors dotenv
```

## Step 3: Create Environment File

Create a `.env` file in the root directory:

```env
# Hostinger SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@ghazi-enterprises.com
SMTP_PASS=your_email_password_here

# Server Port (optional, defaults to 3001)
PORT=3001
```

**⚠️ Important:** Never commit your `.env` file to Git! It's already in `.gitignore`.

## Step 4: Update package.json

Add a script to run the server:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "server": "node server.js",
  "dev:all": "concurrently \"npm run server\" \"npm run dev\""
}
```

Install concurrently to run both servers:
```bash
npm install --save-dev concurrently
```

## Step 5: Run the Server

### Option A: Run separately
Terminal 1:
```bash
npm run server
```

Terminal 2:
```bash
npm run dev
```

### Option B: Run both together
```bash
npm run dev:all
```

## Step 6: Update Frontend

The QuoteModal component will be updated to send requests to `http://localhost:3001/api/send-quote`

## Testing

1. Start the server: `npm run server`
2. Open your website: `http://localhost:3000`
3. Fill out the quote form
4. Submit it
5. Check `masoodfootball@gmail.com` for the email!

## Troubleshooting

### "Connection timeout" or "Authentication failed"
- Double-check your SMTP credentials in `.env`
- Make sure you're using the full email address as username
- Verify the password is correct
- Try port `587` with `secure: false` if `465` doesn't work

### "Port already in use"
- Change `PORT=3001` to a different port in `.env`
- Update the frontend API URL accordingly

### Emails not arriving
- Check spam folder
- Verify the `to` email address in `server.js` (line 40)
- Check server console for error messages

## Production Deployment

For production, you'll need to:
1. Deploy the server to a hosting service (Heroku, Railway, Render, etc.)
2. Set environment variables in your hosting platform
3. Update the frontend API URL to your production server URL

## Security Notes

- ✅ Server runs on your machine/backend (credentials are safe)
- ✅ CORS is enabled for your frontend domain
- ✅ Input validation prevents spam
- ✅ Email password is stored in `.env` (not in code)

---

**This is the simplest backend possible - just one file!** 🎉

