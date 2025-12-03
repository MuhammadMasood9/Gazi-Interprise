# Simple EmailJS Template (Guaranteed to Work)

This is a simple, reliable template that displays all form information properly in EmailJS.

## Copy This Template:

**Subject:**
```
Quote Request from {{user_name}}
```

**To Email:**
```
masoodfootball@gmail.com
```

**From Email:**
```
info@ghazi-enterprises.com
```

**Reply To:**
```
{{user_email}}
```

**Content (HTML):**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f4f4f4;">
  
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #009CA6 0%, #006B73 100%); color: white; padding: 25px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">📋 New Quote Request</h1>
    <p style="margin: 8px 0 0 0; opacity: 0.95;">Ghazi Enterprises</p>
  </div>
  
  <!-- Content -->
  <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
    
    <!-- Contact Info Section -->
    <div style="background: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 6px; border-left: 4px solid #009CA6;">
      <h2 style="color: #009CA6; margin-top: 0; font-size: 18px;">👤 Contact Information</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #009CA6; width: 140px;">Full Name:</td>
          <td style="padding: 8px 0; color: #333;">{{user_name}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #009CA6;">Email Address:</td>
          <td style="padding: 8px 0;"><a href="mailto:{{user_email}}" style="color: #009CA6; text-decoration: none;">{{user_email}}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #009CA6;">Organization:</td>
          <td style="padding: 8px 0; color: #333;">{{organization}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #009CA6;">Phone Number:</td>
          <td style="padding: 8px 0; color: #333;">{{phone}}</td>
        </tr>
      </table>
    </div>
    
    <!-- Requirements Section -->
    <div style="background: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
      <h3 style="color: #009CA6; margin-top: 0; font-size: 16px;">📝 Requirements / Quote Details</h3>
      <div style="white-space: pre-wrap; color: #333; line-height: 1.8; background: white; padding: 15px; border-radius: 4px;">{{message}}</div>
    </div>
    
    <!-- Action Box -->
    <div style="background: #e8f4f5; padding: 15px; border-radius: 6px; border-left: 4px solid #009CA6;">
      <p style="margin: 0; color: #006B73; font-size: 14px;">
        <strong>💡 Quick Action:</strong><br>
        Reply to this email to contact: <a href="mailto:{{user_email}}" style="color: #009CA6; font-weight: bold;">{{user_email}}</a>
      </p>
    </div>
    
  </div>
  
  <!-- Footer -->
  <div style="text-align: center; margin-top: 20px; padding: 15px; background: white; border-radius: 8px;">
    <p style="margin: 0; color: #666; font-size: 12px;">
      <strong>Ghazi Enterprises</strong><br>
      This quote request was submitted through the website contact form.
    </p>
  </div>
  
</div>
```

## How to Use:

1. Go to **EmailJS Dashboard** → **Email Templates**
2. Create new template or edit existing
3. Set the template settings as shown above
4. Paste the HTML content into the template editor
5. Save the template

## What This Template Shows:

✅ **Full Name** - Customer's name  
✅ **Email Address** - Clickable email link  
✅ **Organization** - Hospital/company name (if provided)  
✅ **Phone Number** - Contact phone (if provided)  
✅ **Requirements** - All quote details in a readable format  
✅ **Reply Link** - Easy way to reply to customer  

## Result:

You'll receive a professional, well-formatted email with all the form information clearly displayed, making it easy to process quote requests!

