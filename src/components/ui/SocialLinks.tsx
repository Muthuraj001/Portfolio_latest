import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "../../data/site";
import { cn } from "../../lib/cn";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      name: "GitHub",
      href: siteConfig.github,
      icon: <Github size={iconSize} />,
      hoverClass: "hover:text-white hover:bg-zinc-800/80 hover:border-zinc-700",
    },
    {
      name: "LinkedIn",
      href: siteConfig.linkedin,
      icon: <Linkedin size={iconSize} />,
      hoverClass: "hover:text-[#0077B5] hover:bg-zinc-100/10 hover:border-[#0077B5]/30",
    },
    {
      name: "Twitter",
      href: siteConfig.twitter,
      icon: <Twitter size={iconSize} />,
      hoverClass: "hover:text-[#1DA1F2] hover:bg-zinc-100/10 hover:border-[#1DA1F2]/30",
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: <Mail size={iconSize} />,
      hoverClass: "hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20",
    },
  ];

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Thulasidharan on ${link.name}`}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-850 bg-zinc-950 text-zinc-400 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
            link.hoverClass
          )}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
