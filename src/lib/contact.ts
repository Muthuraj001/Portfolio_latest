import { ContactFormData } from "./validation";

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Read target delivery parameters
  const mode = (import.meta as any).env?.VITE_CONTACT_MODE || "api";

  try {
    // If Mode is netlify forms, we map down a URL encoded payload
    if (mode === "netlify") {
      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      Object.entries(data).forEach(([key, val]) => {
        formData.append(key, val as string);
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      return { success: true, message: "Thank you! Your message was submitted via Netlify Forms." };
    }

    // Default: Dispatching via serverless JSON API routes (works under Vercel & Netlify redirects)
    const endpoint = "/api/contact";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Server responded with an error");
    }

    return { success: true, message: result.message || "Message dispatched successfully!" };
  } catch (error: any) {
    console.error("Form transmission error:", error);
    return {
      success: false,
      message: error?.message || "Connection refused. Please check network logs or try again.",
    };
  }
}
