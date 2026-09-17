import { Instagram, Linkedin, Mail, Phone, Send, MapPin, Github } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const CONTACT_EMAIL = "rizkifadhilah123@gmail.com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="section-label mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal y={16} className="space-y-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+6281285837410"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 812-8583-7410 (Preferred WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/rizky-fadhilah123/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary" />
                </a>
                <a href="https://www.instagram.com/rizkyyfadhilah/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-7 w-7 text-muted-foreground hover:text-primary" />
                </a>
                <a href="https://github.com/rizkyyfadhilahh" target="_blank" rel="noopener noreferrer">
                  <Github className="h-7 w-7 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal y={16} delay={0.1} className="glass p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-left">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <Motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn("btn-primary w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} />}
              </Motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
