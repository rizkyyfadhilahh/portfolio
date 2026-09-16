import { motion as Motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CORE_THRESHOLD, skillGroups } from "@/data/skills";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";

const pillContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="section-label mb-3">Toolbox</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Highlighted skills are the ones I use daily and go deepest on.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={group.category} className="h-full">
                <TiltCard className="glass rounded-xl p-6 card-hover h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold leading-tight">
                        {group.category}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {group.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <Motion.div
                    className="flex flex-wrap gap-2"
                    variants={pillContainerVariants}
                  >
                    {group.skills.map((skill) => (
                      <Motion.span
                        key={skill.name}
                        variants={pillVariants}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-300",
                          skill.level >= CORE_THRESHOLD
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        )}
                      >
                        {skill.name}
                      </Motion.span>
                    ))}
                  </Motion.div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
