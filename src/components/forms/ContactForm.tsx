import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { contactFormSchema, ContactFormData } from "../../lib/validation";
import { submitContactForm } from "../../lib/contact";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "frontend",
      budgetRange: "$1k-$5k",
      contactMethod: "Email",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await submitContactForm(data);

    if (res.success) {
      toast.success(res.message, { id: "contact-toast" });
      setIsSuccess(true);
      reset();
    } else {
      toast.error(res.message, { id: "contact-toast" });
    }
  };

  const projectOptions = [
    { value: "frontend", label: "Frontend Development Opportunity" },
    { value: "react", label: "React / TypeScript Project" },
    { value: "web-design", label: "Web Design / Responsive UI Work" },
    { value: "software-testing", label: "Software Testing Opportunity" },
    { value: "api-testing", label: "API Validation / Frontend Testing" },
    { value: "internship", label: "Internship / Fresher Role" },
    { value: "portfolio", label: "Portfolio / Collaboration Query" },
    { value: "other", label: "Other Professional Query" },
  ];

  const budgetOptions = [
    { value: "not-applicable", label: "Not Applicable" },
    { value: "internship", label: "Internship / Training Based" },
    { value: "entry-level", label: "Entry-Level Role Discussion" },
    { value: "freelance-small", label: "Small Freelance Task" },
    { value: "project-based", label: "Project-Based Work" },
  ];

  const methodOptions = [
    { value: "Email", label: "Contact via Email" },
    { value: "LinkedIn", label: "Message via LinkedIn" },
    { value: "GitHub", label: "Connect via GitHub" },
    { value: "Other", label: "Other Contact Method" },
  ];

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4 max-w-lg mx-auto">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">
            Message Sent Successfully
          </h3>

          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out. Muthuraj has received your message and
            will respond through your preferred contact method shortly.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)}>
          Submit another message
        </Button>
      </div>
    );
  }

  return (
    <form
      id="portfolio-contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 max-w-lg mx-auto text-left"
      data-netlify="true"
      name="contact"
      method="POST"
    >
      {/* Hidden Netlify attributes */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Grid Inputs for Profile info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="name"
          label="Your Name *"
          placeholder="Your full name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          id="email"
          label="Email Address *"
          type="email"
          placeholder="yourname@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <Input
        id="subject"
        label="Subject *"
        placeholder="Frontend role, internship, testing opportunity..."
        error={errors.subject?.message}
        {...register("subject")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          id="projectType"
          label="Reason for Contact *"
          options={projectOptions}
          error={errors.projectType?.message}
          {...register("projectType")}
        />

        <Select
          id="budgetRange"
          label="Opportunity Type *"
          options={budgetOptions}
          error={errors.budgetRange?.message}
          {...register("budgetRange")}
        />
      </div>

      <Select
        id="contactMethod"
        label="Preferred Contact Method *"
        options={methodOptions}
        error={errors.contactMethod?.message}
        {...register("contactMethod")}
      />

      <Textarea
        id="message"
        label="Message *"
        placeholder="Share details about the role, project, internship, testing work, or collaboration opportunity..."
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="pt-2">
        <Button
          id="contact-submit"
          type="submit"
          variant="sparkle"
          isLoading={isSubmitting}
          className="w-full text-xs font-bold uppercase tracking-wider py-3"
        >
          Send Message
          <Send className="ml-2 h-3.5 w-3.5" />
        </Button>
      </div>
    </form>
  );
}