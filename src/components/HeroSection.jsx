import { Instagram, Linkedin, Github, FileText, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { HeroAurora } from "@/components/HeroAurora";

const CV_URL =
  "https://drive.google.com/file/d/1fEkscZjsG1Wjg51o6-Ege_FoCak8k0CD/view?usp=sharing";

export const HeroSection = () => {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <section
      className="relative flex items-center min-h-[calc(100vh-5rem)] px-4 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroAurora />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-center">
        <StaggerContainer
          className="space-y-8 text-center md:text-left"
          stagger={0.12}
        >
          <StaggerItem className="section-label">
            Computer Science Student
          </StaggerItem>

          <StaggerItem
            y={28}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <h1 className="gradient-text-live inline">Rizky Fadhilah</h1>
          </StaggerItem>

          <StaggerItem className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            I build machine learning models and web products end-to-end —
            from data to a working interface.
          </StaggerItem>

          <StaggerItem className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn-primary inline-block">
                Get In Touch
              </Link>
            </Motion.div>
            <Motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FileText size={16} />
                Download CV
              </a>
            </Motion.div>
          </StaggerItem>

          <StaggerItem className="flex items-center justify-center md:justify-start gap-5 pt-2">
            <a
              href="https://www.linkedin.com/in/rizky-fadhilah123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/rizkyyfadhilahh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/rizkyyfadhilah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </StaggerItem>
        </StaggerContainer>

        <Motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Motion.div
            className="relative"
            style={{ rotateX, rotateY, transformPerspective: 900 }}
          >
            <Motion.div
              className="absolute -inset-16 md:-inset-24 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(var(--primary)/0.4), hsl(var(--accent-2)/0.35), hsl(var(--primary)/0.4))",
              }}
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{
                rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <Motion.div
              className="absolute -inset-6 md:-inset-8 rounded-full border-2 border-dashed border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_14px_4px_hsl(var(--primary)/0.5)]" />
            </Motion.div>
            <Motion.div
              className="absolute -inset-10 md:-inset-14 rounded-full border-2 border-dashed border-accent-2/35"
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-3 w-3 rounded-full bg-accent-2 shadow-[0_0_12px_4px_hsl(var(--accent-2)/0.45)]" />
            </Motion.div>

            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/40" />
            <img
              src="/photo/MyPhoto.jpg"
              alt="Foto Rizky Fadhilah"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover grayscale-[15%] shadow-[0_0_70px_-15px_hsl(var(--primary)/0.5)]"
            />
          </Motion.div>
        </Motion.div>
      </div>

      <Motion.a
        href="#featured-work"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </Motion.a>
    </section>
  );
};
