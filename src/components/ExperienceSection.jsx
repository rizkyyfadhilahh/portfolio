import { Fragment, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Briefcase, ChevronDown, GraduationCap, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { CompanyLogo } from "@/components/CompanyLogo";
import { experienceGroups } from "@/data/experience";

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Trophy,
  leadership: Users,
};

const BulletList = ({ bullets }) => (
  <ul className="space-y-3">
    {bullets.map((bullet, i) => (
      <li
        key={i}
        className="relative pl-6 text-sm md:text-base leading-relaxed text-muted-foreground before:absolute before:left-0 before:text-primary/70 before:content-['—']"
      >
        {bullet}
      </li>
    ))}
  </ul>
);

const RowMark = ({ item }) => {
  if (item.company) {
    return (
      <CompanyLogo
        name={item.company}
        src={item.logo}
        tone={item.logoTone}
        className="h-14 w-20"
      />
    );
  }
  const Icon = typeIcons[item.type];
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground">
      <Icon className="h-5 w-5" />
    </span>
  );
};

export const ExperienceSection = () => {
  const [openId, setOpenId] = useState("0-0");

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="mb-12 text-left">
          <p className="section-label mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Where I&apos;ve built and led
          </h2>
        </Reveal>

        <div className="text-left space-y-16">
          {experienceGroups.map((group, gi) => (
            <Reveal key={group.label} delay={0.05}>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70 pb-3">
                {group.label}
              </p>

              <div className="border-b border-border">
                {group.items.map((item, ii) => {
                  const id = `${gi}-${ii}`;
                  const isOpen = openId === id;
                  const hasDetail = Boolean(item.rotations) || item.bullets.length > 0;

                  return (
                    <Fragment key={id}>
                      <div className="border-t border-border">
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : id)}
                          aria-expanded={isOpen}
                          aria-controls={`exp-panel-${id}`}
                          className="group flex w-full items-center justify-between gap-6 py-7 md:py-9 text-left"
                        >
                          <span className="min-w-0">
                            <span
                              className={cn(
                                "block text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-tight transition-colors duration-300",
                                isOpen
                                  ? "text-foreground"
                                  : "text-foreground/70 group-hover:text-foreground"
                              )}
                            >
                              {item.title}
                            </span>
                            <span className="mt-2 block text-sm text-muted-foreground">
                              {item.org}
                            </span>
                            <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                              {item.period}
                            </span>
                          </span>

                          <span className="flex shrink-0 items-center gap-6">
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <Motion.span
                                  key="mark"
                                  initial={{ opacity: 0, x: 8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 8 }}
                                  transition={{ duration: 0.25 }}
                                  className="hidden sm:inline-flex"
                                >
                                  <RowMark item={item} />
                                </Motion.span>
                              )}
                            </AnimatePresence>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 text-foreground transition-transform duration-300",
                                isOpen && "rotate-180"
                              )}
                            />
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <Motion.div
                              id={`exp-panel-${id}`}
                              key="panel"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="max-w-3xl pb-10 md:pb-12">
                                {item.rotations ? (
                                  <div className="space-y-10 border-l border-border pl-6">
                                    {item.rotations.map((rotation) => (
                                      <div key={rotation.title}>
                                        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                                          <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">
                                            {rotation.title}
                                          </h4>
                                          {rotation.period && (
                                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                                              {rotation.period}
                                            </span>
                                          )}
                                        </div>
                                        {rotation.bullets.length > 0 && (
                                          <BulletList bullets={rotation.bullets} />
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : hasDetail ? (
                                  <BulletList bullets={item.bullets} />
                                ) : null}
                              </div>
                            </Motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
