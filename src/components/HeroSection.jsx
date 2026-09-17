import { Instagram, Linkedin, Github, Download, ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

const CV_URL =
  "https://drive.google.com/file/d/1fEkscZjsG1Wjg51o6-Ege_FoCak8k0CD/view?usp=sharing";

const WavyText = ({ text, className = "", startDelay = 0, reduceMotion = false }) => {
  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
  <>
    {text.split("").map((char, i) => (
      <Motion.span
        key={i}
        className={`inline-block ${className}`}
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: startDelay + i * 0.045,
        }}
      >
        {char === " " ? " " : char}
      </Motion.span>
    ))}
  </>
  );
};

export const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100vh-5rem)] px-4 pt-10 pb-20 overflow-hidden">
      <div className="container mx-auto flex-1 flex flex-col justify-center">
        <StaggerContainer stagger={0.1}>
          <StaggerItem className="section-label mb-6">
            Computer Science Student
          </StaggerItem>

          <StaggerItem y={26} className="overflow-hidden">
            <Motion.h1
              className="font-medium uppercase tracking-tight leading-[0.95] text-foreground text-[13vw] sm:text-7xl md:text-8xl lg:text-[7rem]"
              animate={
                reduceMotion
                  ? { x: 0, opacity: 1 }
                  : { x: ["100vw", "0vw", "0vw", "-60vw"], opacity: [0, 1, 1, 0] }
              }
              transition={
                reduceMotion
                  ? { duration: 0.5 }
                  : {
                      duration: 5,
                      times: [0, 0.25, 0.8, 1],
                      ease: ["easeOut", "linear", "easeIn"],
                      repeat: Infinity,
                    }
              }
            >
              Rizky Fadhilah
            </Motion.h1>
          </StaggerItem>

          <StaggerItem y={18} className="mt-4 md:mt-6">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-muted-foreground">
              <WavyText text="machine learning" className="italic text-primary" reduceMotion={reduceMotion} />
              {" "}
              <WavyText text="models & web products, built end-to-end." startDelay={17 * 0.045} reduceMotion={reduceMotion} />
            </p>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer
          stagger={0.1}
          className="flex flex-wrap items-end justify-between gap-8 mt-16 md:mt-20"
        >
          <StaggerItem className="flex flex-col gap-5">
            <a
              href="#featured-work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="h-4 w-4" />
              <span className="font-serif italic text-base">selected work</span>
            </a>

            <div className="flex items-center gap-5">
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
            </div>
          </StaggerItem>

          <StaggerItem className="flex items-center gap-3">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              CV
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
                <Download className="h-3.5 w-3.5" />
              </span>
            </a>
            <Link
              to="/contact"
              className="btn-outline !rounded-full pl-2 pr-6 inline-flex items-center gap-3"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-2 text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              Get in touch
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
