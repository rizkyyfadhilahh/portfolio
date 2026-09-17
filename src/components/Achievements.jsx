import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  {
    value: "1st Place",
    label: "DATAQUEST AIRNOLOGY 4.0",
    detail: "National NLP competition · 100+ teams",
  },
  {
    value: "3 Rotations",
    label: "Fast Learner & Adaptable",
    detail: "Blockchain → BI → GenAI in one internship, plus a 2-week self-taught NLP win",
  },
  {
    value: "900+",
    label: "Community Members",
    detail: "Grown in 5 months as Founder",
  },
];

export const Achievements = () => {
  return (
    <section className="py-16 px-4 border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center sm:text-left">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="sm:border-l sm:border-border sm:pl-6 first:sm:border-l-0 first:sm:pl-0">
              <p className="font-serif text-3xl md:text-4xl text-foreground">
                {stat.value}
              </p>
              <p className="text-sm font-medium mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.detail}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
