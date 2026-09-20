import { StaggerContainer, StaggerItem, Reveal } from "@/components/motion/Reveal";

const stats = [
  {
    value: "1st",
    unit: "Place",
    label: "DATAQUEST AIRNOLOGY 4.0",
    detail: "National NLP competition · 100+ teams",
  },
  {
    value: "3",
    unit: "Rotations",
    label: "Fast Learner & Adaptable",
    detail: "Blockchain → BI → GenAI in one internship, plus a 2-week self-taught NLP win",
  },
  {
    value: "900+",
    unit: "Members",
    label: "Community Founder",
    detail: "Grown in 5 months as Founder",
  },
];

export const Achievements = () => {
  return (
    <section className="relative border-t border-border px-4 py-20 md:py-28">
      <div className="container mx-auto text-left">
        <Reveal className="mb-12 flex items-center gap-4">
          <p className="section-label">Highlights</p>
          <span className="h-px flex-1 bg-border" />
        </Reveal>

        <StaggerContainer
          stagger={0.12}
          className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div className="group relative border-t border-border pt-6">
                <span className="pointer-events-none absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <p className="mb-8 font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="flex items-baseline gap-3 leading-none">
                  <span className="font-serif text-6xl text-foreground md:text-7xl">
                    {stat.value}
                  </span>
                  <span className="font-serif text-2xl italic text-primary md:text-3xl">
                    {stat.unit}
                  </span>
                </p>
                <p className="mt-6 text-sm font-medium tracking-wide text-foreground">
                  {stat.label}
                </p>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {stat.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
