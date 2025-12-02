<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1l5azT7PL6ANYnze1IZLd0Df5vePJtn2U

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set up EmailJS for quote form submissions:
   - Sign up at https://www.emailjs.com/
   - Create an Email Service (Gmail, Outlook, etc.) and note the Service ID
   - Create an Email Template with these variables (form uses `sendForm` method):
     - `{{user_name}}` - sender's full name
     - `{{user_email}}` - sender's email address
     - `{{organization}}` - organization/hospital name
     - `{{phone}}` - phone number
     - `{{message}}` - requirements/quote details
     - `{{to_email}}` - recipient email (set to masoodfootball@gmail.com)
   - In your EmailJS template, set the "To Email" field to: `{{to_email}}` or directly to `masoodfootball@gmail.com`
   - Get your Public Key from Account settings
   - Create a `.env` file in the root directory with:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
3. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key (if needed)
4. Run the app:
   `npm run dev`
