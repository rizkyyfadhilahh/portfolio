import { skillGroups } from "@/data/skills";

const allSkills = skillGroups.flatMap((group) => group.skills.map((s) => s.name));
const half = Math.ceil(allSkills.length / 2);
const rowA = allSkills.slice(0, half);
const rowB = allSkills.slice(half);

const Row = ({ items, reverse }) => (
  <div className={reverse ? "marquee-row-reverse" : "marquee-row"}>
    {[...items, ...items].map((name, i) => (
      <span
        key={i}
        className="glass px-4 py-2 rounded-full text-sm text-muted-foreground whitespace-nowrap"
      >
        {name}
      </span>
    ))}
  </div>
);

export const SkillsMarquee = () => (
  <div className="marquee-mask overflow-hidden space-y-3 mb-12">
    <Row items={rowA} />
    <Row items={rowB} reverse />
  </div>
);
