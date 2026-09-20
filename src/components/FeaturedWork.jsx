import { ArrowUpRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

const stripEmoji = (text) => text.replace(/^\p{Extended_Pictographic}\s*/u, "");

export const FeaturedWork = () => {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="featured-work"
      className="relative border-t border-border px-4 py-24 md:py-32"
    >
      <div className="container mx-auto text-left">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label mb-6">Work</p>
            <h2 className="text-4xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Selected <span className="font-serif italic text-primary">work</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="btn-outline group inline-flex items-center gap-3 !rounded-full !py-2 !pl-6 !pr-2"
          >
            See all projects
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-2 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </Reveal>

        <StaggerContainer
          stagger={0.12}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3"
        >
          {featured.map((project, i) => (
            <StaggerItem key={project.id}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.badge && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/85 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur">
                      <Trophy size={12} />
                      {stripEmoji(project.badge)}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.tags.filter(Boolean).slice(0, 2).join("  ·  ")}
                  </span>
                </div>

                <h3 className="mt-3 line-clamp-3 text-lg font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>

                <span className="relative mt-5 block h-px w-full overflow-hidden bg-border">
                  <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
