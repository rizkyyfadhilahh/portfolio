import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const AUTOPLAY_MS = 6000;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export const ProjectsCarousel = () => {
  const [[index, direction], setSlide] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  const paginate = (newDirection) => {
    setSlide(([current]) => {
      const next = (current + newDirection + projects.length) % projects.length;
      return [next, newDirection];
    });
  };

  const goTo = (target) => {
    setSlide(([current]) => [target, target > current ? 1 : -1]);
  };

  useEffect(() => {
    if (isHovering) return undefined;
    timerRef.current = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [isHovering, index]);

  const project = projects[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <Motion.div
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) paginate(1);
              else if (info.offset.x > 80) paginate(-1);
            }}
            className="glass rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 cursor-grab active:cursor-grabbing"
          >
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              {project.badge && (
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-foreground text-background shadow-sm">
                  {project.badge}
                </span>
              )}
            </div>

            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  tag && (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  )
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    title="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => paginate(-1)}
        aria-label="Previous project"
        className="hidden sm:flex absolute top-1/2 -left-4 md:-left-5 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full glass hover:border-primary hover:text-primary transition-colors"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => paginate(1)}
        aria-label="Next project"
        className="hidden sm:flex absolute top-1/2 -right-4 md:-right-5 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full glass hover:border-primary hover:text-primary transition-colors"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex items-center justify-center gap-2 mt-6">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className="relative h-1.5 rounded-full bg-border overflow-hidden transition-all duration-300"
            style={{ width: i === index ? 28 : 8 }}
          >
            {i === index && (
              <Motion.div
                layoutId="carousel-dot"
                className="absolute inset-0 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
