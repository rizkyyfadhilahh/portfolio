import { Fragment, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { skillGroups } from "@/data/skills";

const kindLabel = { hard: "Hard skills", soft: "Soft skills" };

const IconRow = ({ icons, className = "" }) => (
  <div className={cn("flex items-center gap-4 text-muted-foreground", className)}>
    {icons.map((item) => {
      const Icon = item.Icon;
      return (
        <span key={item.label} title={item.label} className="inline-flex">
          <Icon className="h-5 w-5" aria-label={item.label} />
        </span>
      );
    })}
  </div>
);

export const SkillsAccordion = () => {
  const [openId, setOpenId] = useState(skillGroups[0].id);

  return (
    <div className="text-left">
      {skillGroups.map((group, index) => {
        const isOpen = openId === group.id;
        const showKindLabel = index === 0 || skillGroups[index - 1].kind !== group.kind;
        const isLastOfKind =
          index === skillGroups.length - 1 || skillGroups[index + 1].kind !== group.kind;

        return (
          <Fragment key={group.id}>
            {showKindLabel && (
              <p
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70 pb-3",
                  index !== 0 && "pt-12"
                )}
              >
                {kindLabel[group.kind]}
              </p>
            )}

            <div className={cn("border-t border-border", isLastOfKind && "border-b")}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : group.id)}
                aria-expanded={isOpen}
                aria-controls={`skill-panel-${group.id}`}
                className="group flex w-full items-center justify-between gap-6 py-7 md:py-9 text-left"
              >
                <span
                  className={cn(
                    "text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-tight transition-colors duration-300",
                    isOpen ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
                  )}
                >
                  {group.title}
                </span>

                <span className="flex shrink-0 items-center gap-6">
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Motion.span
                        key="icons"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.25 }}
                        className="hidden sm:inline-flex"
                      >
                        <IconRow icons={group.icons} />
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
                    id={`skill-panel-${group.id}`}
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pb-12">
                      <IconRow icons={group.icons} className="sm:hidden mb-5" />
                      <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                        {group.description}
                      </p>
                      <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground/70">
                        {group.keywords.join("  ·  ")}
                      </p>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
