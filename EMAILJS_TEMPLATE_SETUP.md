# IMPORTANT: EmailJS Template Configuration

## ⚠️ CRITICAL SETTING - Recipient Email

To receive quote requests at **masoodfootball@gmail.com**, you MUST configure your EmailJS template correctly.

### Step-by-Step Fix:

1. **Go to EmailJS Dashboard** → **Email Templates**
2. **Open your template** (or create a new one)
3. **Find the "To Email" field**
4. **Set it to:** `masoodfootball@gmail.com`

### ❌ WRONG Configuration:
```
To Email: {{user_email}}          ← This sends to the form submitter (WRONG!)
To Email: {{from_email}}           ← This also sends to the form submitter (WRONG!)
```

### ✅ CORRECT Configuration:
```
To Email: masoodfootball@gmail.com    ← This sends to you (CORRECT!)
```

OR if you want to use the form value:
```
To Email: {{to_email}}                 ← This uses the hidden field value (CORRECT!)
```

### Why This Matters:

- If "To Email" is set to `{{user_email}}` or `{{from_email}}`, the email will be sent to the person filling out the form
- You want to receive the emails at **masoodfootball@gmail.com**, not send them back to the customer
- The customer's email (`{{user_email}}`) should only be used in the email body or "Reply To" field

### Recommended Template Settings:

```
Subject: Quote Request from {{user_name}}

To Email: masoodfootball@gmail.com          ← YOU receive it here
From Name: {{user_name}}
From Email: masoodfootball@gmail.com        ← Or your service email
Reply To: {{user_email}}                    ← Replies go to customer

Email Body:
New Quote Request

Name: {{user_name}}
Email: {{user_email}}                       ← Customer's email (for reply)
Organization: {{organization}}
Phone: {{phone}}

Requirements:
{{message}}
```

### Verification:

After updating your template:
1. Test the form on your website
2. Submit a test quote request
3. Check **masoodfootball@gmail.com** inbox (not the test email you used)
4. You should receive the email, not the person who submitted the form

---

**Remember:** The "To Email" field in your EmailJS template determines WHERE the email goes. Make sure it's set to **masoodfootball@gmail.com**!

