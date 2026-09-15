import { useRef } from "react";
import { Briefcase, GraduationCap, Trophy, Users } from "lucide-react";
import { motion as Motion, useScroll } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { CompanyLogo } from "@/components/CompanyLogo";
import { experienceGroups } from "@/data/experience";

const icons = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Trophy,
  leadership: Users,
};

const TimelineGroup = ({ label, items }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 65%"],
  });

  return (
    <div className="mb-16 last:mb-0">
      <Reveal className="mb-8">
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-primary/80">
          {label}
        </h3>
      </Reveal>

      <div ref={timelineRef} className="relative space-y-10">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
        <Motion.div
          className="absolute left-[19px] top-2 w-px bg-primary origin-top"
          style={{ scaleY: scrollYProgress, height: "calc(100% - 1rem)" }}
        />

        {items.map((item, key) => {
          const Icon = icons[item.type];
          return (
            <Reveal
              key={key}
              delay={key * 0.06}
              y={20}
              className={`relative text-left ${item.company ? "pl-20" : "pl-14"}`}
            >
              <Motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: key * 0.06,
                }}
                className="absolute left-0 top-0"
              >
                {item.company ? (
                  <CompanyLogo name={item.company} src={item.logo} />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full glass">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                )}
              </Motion.div>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <span className="text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-primary mb-3">{item.org}</p>

              {item.rotations ? (
                <div className="space-y-4 border-l border-border pl-4">
                  {item.rotations.map((rotation, i) => (
                    <div key={i}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                        <h5 className="font-medium text-sm">{rotation.title}</h5>
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                          {rotation.period}
                        </span>
                      </div>
                      {rotation.bullets.length > 0 ? (
                        <ul className="space-y-1 mt-1">
                          {rotation.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="text-muted-foreground text-sm pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary/50"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground/60 text-xs italic border border-dashed border-border rounded-md px-3 py-1.5 mt-1.5">
                          Details coming soon — write-up in progress to keep every claim accurate.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : item.bullets.length > 0 ? (
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary/50"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground/60 text-sm italic border border-dashed border-border rounded-md px-3 py-2">
                  Details coming soon — write-up in progress to keep every claim accurate.
                </p>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="section-label mb-3">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Experience</h2>
        </Reveal>

        {experienceGroups.map((group) => (
          <TimelineGroup key={group.label} label={group.label} items={group.items} />
        ))}
      </div>
    </section>
  );
};
