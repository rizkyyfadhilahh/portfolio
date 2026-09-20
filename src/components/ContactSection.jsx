import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "rizkifadhilah123@gmail.com";
const ease = [0.22, 1, 0.36, 1];

const links = [
  {
    label: "WhatsApp",
    value: "+62 812-8583-7410",
    href: "https://wa.me/6281285837410",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "rizky-fadhilah123",
    href: "https://www.linkedin.com/in/rizky-fadhilah123/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "rizkyyfadhilahh",
    href: "https://github.com/rizkyyfadhilahh",
    icon: Github,
  },
  {
    label: "Instagram",
    value: "@rizkyyfadhilah",
    href: "https://www.instagram.com/rizkyyfadhilah/",
    icon: Instagram,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const formatJakartaTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta",
  }).format(new Date());

const Field = ({ index, label, children }) => (
  <label className="group relative block">
    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-primary">{index}</span> — {label}
    </span>
    {children}
    <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-focus-within:scale-x-100" />
  </label>
);

const fieldClass =
  "mt-2 block w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50";

const Bracket = ({ className }) => (
  <span className={`pointer-events-none absolute h-4 w-4 border-primary ${className}`} />
);

export const ContactSection = () => {
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState(formatJakartaTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatJakartaTime()), 30000);
    return () => clearInterval(id);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Couldn't copy", description: CONTACT_EMAIL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app…",
      description: "Your message is ready to send from your default mail client.",
    });
    e.target.reset();
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] -mt-20 items-center overflow-hidden pt-28 pb-16 md:pt-20"
    >
      {!reduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-40 hidden h-[44rem] w-[44rem] lg:block"
        >
          <Motion.div
            className="absolute inset-0 rounded-full border border-dashed border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/60" />
          </Motion.div>
          <Motion.div
            className="absolute inset-16 rounded-full border border-primary/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/50" />
          </Motion.div>
          <div className="absolute inset-40 rounded-full border border-border/60" />
        </div>
      )}

      <div className="container relative mx-auto grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-9 text-left"
        >
          <Motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <p className="section-label">Contact</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to opportunities
              <span className="font-mono text-foreground/70">· Jakarta {time}</span>
            </span>
          </Motion.div>

          <Motion.h1
            variants={itemVariants}
            className="text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Let&apos;s talk about{" "}
            <span className="font-serif italic text-primary">what&apos;s next.</span>
          </Motion.h1>

          <Motion.p variants={itemVariants} className="max-w-md text-muted-foreground">
            Have a role, a project, or an idea in mind? Send a message — I&apos;ll get
            back to you as soon as I can.
          </Motion.p>

          <Motion.ul variants={itemVariants} className="max-w-md border-t border-border">
            <li className="group flex items-center justify-between gap-4 border-b border-border py-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex min-w-0 items-center gap-4">
                <Mail size={18} className="shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate text-sm text-foreground transition-colors group-hover:text-primary">
                    {CONTACT_EMAIL}
                  </span>
                </span>
              </a>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy email address"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </li>

            {links.map((link) => {
              const { label, value, href } = link;
              const Icon = link.icon;
              return (
              <li key={label} className="border-b border-border">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon size={18} className="shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate text-sm text-foreground transition-colors group-hover:text-primary">
                        {value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </a>
              </li>
              );
            })}
          </Motion.ul>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="relative border border-border bg-card/60 p-8 text-left backdrop-blur-sm md:p-10"
        >
          <Bracket className="-left-px -top-px border-l-2 border-t-2" />
          <Bracket className="-right-px -top-px border-r-2 border-t-2" />
          <Bracket className="-bottom-px -left-px border-b-2 border-l-2" />
          <Bracket className="-bottom-px -right-px border-b-2 border-r-2" />

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Send a message</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Direct
            </span>
          </div>

          <form className="space-y-7" onSubmit={handleSubmit}>
            <Field index="01" label="Name">
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className={fieldClass}
              />
            </Field>
            <Field index="02" label="Email">
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={fieldClass}
              />
            </Field>
            <Field index="03" label="Message">
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Hello, I'd like to talk about…"
                className={`${fieldClass} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary group inline-flex w-full items-center justify-between gap-3 !rounded-full !py-2 !pl-6 !pr-2 disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send message"}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                <Send size={16} />
              </span>
            </button>
          </form>
        </Motion.div>
      </div>
    </section>
  );
};
