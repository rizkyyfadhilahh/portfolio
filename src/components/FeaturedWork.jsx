import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";

export const FeaturedWork = () => {
  const featured = projects.slice(0, 3);

  return (
    <section id="featured-work" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            See all projects <ArrowRight size={16} />
          </Link>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <TiltCard className="group glass rounded-lg overflow-hidden card-hover h-full">
                <div className="h-40 overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      tag && (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      )
                    ))}
                  </div>
                  <h3 className="font-semibold mb-4 flex-grow">
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
