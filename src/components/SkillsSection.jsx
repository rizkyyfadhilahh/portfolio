import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //Programming Languages & Databases
  { name: "Python", level: 90, category: "Programming Languages & Databases" },
  { name: "JavaScript", level: 90, category: "Programming Languages & Databases" },
  { name: "TypeScript", level: 90, category: "Programming Languages & Databases" },
  { name: "Java", level: 85, category: "Programming Languages & Databases" },
  { name: "PostgreSQL", level: 90, category: "Programming Languages & Databases" },
  { name: "MySQL", level: 95, category: "Programming Languages & Databases" },
  { name: "C", level: 90, category: "Programming Languages & Databases" },
  { name: "C++", level: 90, category: "Programming Languages & Databases" },
  { name: "PHP", level: 90, category: "Programming Languages & Databases" },

  // Frameworks & Technologies
  { name: "React Native", level: 80, category: "Frameworks & Technologies" },
  { name: "ReactJS", level: 80, category: "Frameworks & Technologies" },
  { name: "ExpressJS", level: 80, category: "Frameworks & Technologies" },
  { name: "Tailwind CSS", level: 80, category: "Frameworks & Technologies" },
  { name: "Laravel", level: 85, category: "Frameworks & Technologies" },
  { name: "Machine Learning", level: 88, category: "Frameworks & Technologies" },
  { name: "Deep Learning", level: 88, category: "Frameworks & Technologies" },
  { name: "Computer Vision", level: 88, category: "Frameworks & Technologies" },
  { name: "Natural Language Processing", level: 88, category: "Frameworks & Technologies" },
  { name: "Speech Recognition", level: 88, category: "Frameworks & Technologies" },
  { name: "Data Analysis", level: 88, category: "Frameworks & Technologies" },
  { name: "Data Visualization", level: 88, category: "Frameworks & Technologies" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "Tableau", level: 80, category: "Tools" },
  { name: "PowerBI", level: 85, category: "Tools" },
  { name: "Figma", level: 90, category: "Tools" },
  { name: "Canva", level: 90, category: "Tools" },

  //Soft Skills
  { name: "Communication", level: 95, category: "Soft Skills" },
  { name: "Leadership", level: 95, category: "Soft Skills" },
  { name: "Team Collaboration", level: 95, category: "Soft Skills" },
  { name: "Problem Solving", level: 90, category: "Soft Skills" },
  { name: "Critical Thinking", level: 90, category: "Soft Skills" },
  { name: "Adaptability", level: 90, category: "Soft Skills" },
  { name: "Time Management", level: 90, category: "Soft Skills" },
  { name: "Public Speaking", level: 90, category: "Soft Skills" },

];

const categories = ["all", "Programming Languages & Databases", "Framework & Technologies", "Tools", "Soft Skills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};