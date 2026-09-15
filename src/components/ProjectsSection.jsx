import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="section-label mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            A selection of projects spanning machine learning competitions and
            full-stack web products. Drag, swipe, or use the arrows to browse.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ProjectsCarousel />
        </Reveal>

        <Reveal className="text-center mt-16" delay={0.1}>
          <a
            className="btn-outline w-fit inline-flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rizkyyfadhilahh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
