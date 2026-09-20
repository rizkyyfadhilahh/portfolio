import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

const AUTOPLAY_MS = 9000;
const ease = [0.22, 1, 0.36, 1];
const pad = (n) => String(n).padStart(2, "0");
const stripEmoji = (text) => text.replace(/^\p{Extended_Pictographic}\s*/u, "");

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 56 : -56 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease, staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

const itemVariants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const imageVariants = {
  enter: { clipPath: "inset(0 0 100% 0)" },
  center: { clipPath: "inset(0 0 0% 0)", transition: { duration: 0.9, ease } },
};

const zoomVariants = {
  enter: { scale: 1.18 },
  center: { scale: 1, transition: { duration: 1.2, ease } },
};

export const ProjectsShowcase = () => {
  const reduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = (step) => {
    setSlide(([current]) => [(current + step + projects.length) % projects.length, step]);
  };

  const goTo = (target) => {
    setSlide(([current]) => (target === current ? [current, 0] : [target, target > current ? 1 : -1]));
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const project = projects[index];
  const tags = project.tags.filter(Boolean).slice(0, 5);

  return (
    <section
      id="projects"
      className="relative flex flex-col min-h-[100svh] -mt-20 pt-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto flex-1 flex flex-col">
        <div className="flex items-center justify-between pt-8 md:pt-10">
          <p className="section-label">Selected Projects</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rizkyyfadhilahh"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              All repositories <ArrowUpRight size={14} />
            </a>
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
              <span className="text-foreground">{pad(index + 1)}</span> / {pad(projects.length)}
            </p>
          </div>
        </div>

        <div className="relative flex-1 flex items-center py-8 md:py-6">
          <AnimatePresence mode="popLayout" initial={false}>
            <Motion.span
              key={`num-${project.id}`}
              aria-hidden="true"
              className="pointer-events-none select-none absolute -right-4 md:right-0 bottom-0 font-serif leading-none text-[42vw] md:text-[24rem] text-foreground/[0.035]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease }}
            >
              {pad(index + 1)}
            </Motion.span>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <Motion.article
              key={project.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -90) paginate(1);
                else if (info.offset.x > 90) paginate(-1);
              }}
              className="relative grid w-full grid-cols-1 md:grid-cols-[1fr_1.15fr] items-center gap-8 lg:gap-16 touch-pan-y"
            >
              <div className="order-2 md:order-1 space-y-6 text-left">
                <Motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
                  {project.badge && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <Trophy size={13} />
                      {stripEmoji(project.badge)}
                    </span>
                  )}
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {tags.join("  ·  ")}
                  </span>
                </Motion.div>

                <Motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-foreground"
                >
                  {project.title}
                </Motion.h2>

                <Motion.div variants={itemVariants} className="h-px w-16 bg-primary" />

                <Motion.p
                  variants={itemVariants}
                  className="max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground line-clamp-5"
                >
                  {project.description}
                </Motion.p>

                <Motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-2"
                    >
                      Live demo <ExternalLink size={15} />
                    </a>
                  )}
                </Motion.div>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="hidden sm:block absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-primary/30" />
                <Motion.div
                  variants={imageVariants}
                  className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-secondary shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]"
                >
                  <Motion.img
                    variants={zoomVariants}
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </Motion.div>
              </div>
            </Motion.article>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6 pb-8 md:pb-10">
          <div className="flex flex-1 items-end gap-3">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                aria-current={i === index}
                className="group flex-1 max-w-[110px] text-left"
              >
                <span
                  className={cn(
                    "font-mono text-[11px] tracking-widest transition-colors",
                    i === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {pad(i + 1)}
                </span>
                <span className="relative mt-2 block h-[2px] w-full overflow-hidden bg-border">
                  {i < index && <span className="absolute inset-0 bg-foreground/25" />}
                  {i === index &&
                    (reduceMotion ? (
                      <span className="absolute inset-0 bg-primary" />
                    ) : (
                      <span
                        key={`${index}-${direction}`}
                        className="absolute inset-0 origin-left bg-primary"
                        style={{
                          animation: `progress-fill ${AUTOPLAY_MS}ms linear forwards`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                        onAnimationEnd={() => paginate(1)}
                      />
                    ))}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
