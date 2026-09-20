import { Reveal } from "@/components/motion/Reveal";
import { SkillsAccordion } from "@/components/SkillsAccordion";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="mb-10 text-left">
          <p className="section-label mb-3">Skills & Expertise</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What I bring to a team
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <SkillsAccordion />
        </Reveal>
      </div>
    </section>
  );
};
