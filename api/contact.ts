import { type VercelRequest, type VercelResponse } from "@vercel/node";

// Standard JSON-payload validator
function sanitizeString(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed. Please use POST.` });
  }

  try {
    // 2. Limit maximum request body sizes to 50KB to block DoS (Denial of Service) attacks
    const contentLength = req.headers["content-length"];
    if (contentLength && parseInt(contentLength, 10) > 50 * 1024) {
      return res.status(413).json({ error: "Payload exceeds safe maximum limit (50KB)." });
    }

    const { name, email, subject, message, projectType, budgetRange, contactMethod } = req.body;

    // 3. Robust Server-side validation checks
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ error: "Invalid Name. Must be at least 2 characters." });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid Email Address." });
    }
    if (!subject || subject.trim().length < 3) {
      return res.status(400).json({ error: "Invalid Subject line." });
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({ error: "Message too short. Must describe your purpose." });
    }

    // 4. Sanitize parameters to avoid HTML injection
    const cleanName = sanitizeString(name);
    const cleanEmail = sanitizeString(email);
    const cleanSubject = sanitizeString(subject);
    const cleanMsg = sanitizeString(message);

    // 5. Build mock development logs or trigger real email integration safely
    console.log("=== SECURE TRANSMISSION RECEIVED ===");
    console.log(`From: ${cleanName} (${cleanEmail})`);
    console.log(`Subject: ${cleanSubject}`);
    console.log(`Preferred Method: ${contactMethod}`);
    console.log(`Scope: ${projectType} | Budget: ${budgetRange || "none"}`);
    console.log(`Message: ${cleanMsg}`);
    console.log("=====================================");

    // Example Email implementation (Resend integration)
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
        const errorText = await mailResponse.text();
        console.error("Resend API rejected transmission:", errorText);
        throw new Error("Unable to relay message through secure mail systems.");
      }
    }

    return res.status(200).json({
      success: true,
      message: "Message received safely! Thulasidharan will respond shortly.",
    });
  } catch (error: any) {
    console.error("Serverless API Error:", error);
    return res.status(500).json({
      error: error?.message || "Internal server error. Unable to process forms.",
    });
  }
}
