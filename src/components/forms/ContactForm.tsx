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
      projectType: "fullstack",
      budgetRange: "$1k - $3k",
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
    { value: "fullstack", label: "Full Stack Web Application" },
    { value: "frontend", label: "React / Frontend Refactoring" },
    { value: "backend", label: "Custom API Services" },
    { value: "devops", label: "Docker & CI/CD Pipeline Automation" },
    { value: "security-audit", label: "Web Security & Core OWASP Audit" },
    { value: "consulting", label: "General Technical Advisory" },
    { value: "other", label: "Other Project / Freelance Consultation" },
  ];

  const budgetOptions = [
    { value: "under-1k", label: "Under $1,000 USD" },
    { value: "1k-3k", label: "$1,000 - $3,000 USD" },
    { value: "3k-5k", label: "$3,000 - $5,000 USD" },
    { value: "above-5k", label: "$5,000+ USD" },
  ];

  const methodOptions = [
    { value: "Email", label: "Deliver via Email" },
    { value: "LinkedIn", label: "Message via LinkedIn Profile" },
    { value: "Other", label: "Other Contact Paths" },
  ];

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4 max-w-lg mx-auto">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">Transmitted Successfully</h3>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
            Thank you, Thulasidharan has received your parameters and security details. He will reach back using your preferred contact method shortly.
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
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          label="Email Address *"
          type="email"
          placeholder="johndoe@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <Input
        id="subject"
        label="Subject Line *"
        placeholder="Freelancing project or consulting query"
        error={errors.subject?.message}
        {...register("subject")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          id="projectType"
          label="Scope of Project *"
          options={projectOptions}
          error={errors.projectType?.message}
          {...register("projectType")}
        />
        <Select
          id="budgetRange"
          label="Target Budget Range *"
          options={budgetOptions}
          error={errors.budgetRange?.message}
          {...register("budgetRange")}
        />
      </div>

      <Select
        id="contactMethod"
        label="Method of Return Contact *"
        options={methodOptions}
        error={errors.contactMethod?.message}
        {...register("contactMethod")}
      />

      <Textarea
        id="message"
        label="Introduce your Project details *"
        placeholder="Brief description of the stack, timeline, database requirements, or technical bottlenecks you require assistance with..."
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
          Send Secure Transmission
          <Send className="ml-2 h-3.5 w-3.5" />
        </Button>
      </div>
    </form>
  );
}
