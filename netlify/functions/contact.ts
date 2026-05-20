import { Handler } from "@netlify/functions";

function sanitizeString(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const handler: Handler = async (event, context) => {
  // 1. Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST", "Content-Type": "application/json" },
      body: JSON.stringify({ error: `Method ${event.httpMethod} not allowed. Please use POST.` }),
    };
  }

  try {
    // 2. Reject oversized payloads (limit is 50KB)
    const bodyStr = event.body || "";
    if (bodyStr.length > 50 * 1024) {
      return {
        statusCode: 413,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Payload exceeds safe maximum limit (50KB)." }),
      };
    }

    const payload = JSON.parse(bodyStr);
    const { name, email, subject, message, projectType, budgetRange, contactMethod } = payload;

    // 3. Robust Server validation checks
    if (!name || name.trim().length < 2) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid Name. Must be at least 2 characters." }),
      };
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid Email Address." }),
      };
    }
    if (!subject || subject.trim().length < 3) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid Subject line." }),
      };
    }
    if (!message || message.trim().length < 10) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Message too short. Must describe your purpose." }),
      };
    }

    // 4. Sanitize parameters to avoid HTML injection
    const cleanName = sanitizeString(name);
    const cleanEmail = sanitizeString(email);
    const cleanSubject = sanitizeString(subject);
    const cleanMsg = sanitizeString(message);

    console.log("=== NETLIFY SECURE TRANSMISSION ===");
    console.log(`From: ${cleanName} (${cleanEmail})`);
    console.log(`Subject: ${cleanSubject}`);
    console.log(`Preferred Method: ${contactMethod}`);
    console.log(`Scope: ${projectType} | ${budgetRange || "none"}`);
    console.log(`Message: ${cleanMsg}`);
    console.log("=====================================");

    // Email Relay Setup (Resend integration)
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const toEmail = process.env.CONTACT_TO_EMAIL || "thulasidharankvp@gmail.com";
      const fromEmail = process.env.CONTACT_FROM_EMAIL || "portfolio@sandbox.resend.dev";

      const mailBody = {
        from: fromEmail,
        to: toEmail,
        subject: `[Portfolio Contact] ${cleanSubject}`,
        html: `
          <h3>New secure contact message from: ${cleanName}</h3>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Preferred Contact Path:</strong> ${contactMethod}</p>
          <p><strong>Project Category:</strong> ${projectType}</p>
          <p><strong>Proposed Budget Index:</strong> ${budgetRange || "unselected"}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f4f4f5; border-radius: 6px; border: 1px solid #e4e4e7;">
            ${cleanMsg.replace(/\n/g, "<br/>")}
          </div>
        `,
      };

      const mailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(mailBody),
      });

      if (!mailResponse.ok) {
        throw new Error("Unable to relay message through secure mail systems.");
      }
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "Message received safely! Thulasidharan will respond shortly.",
      }),
    };
  } catch (error: any) {
    console.error("Netlify Serverless Fn Error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: error?.message || "Internal server error. Unable to process forms.",
      }),
    };
  }
};
