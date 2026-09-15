import { Code2, Layers, Wrench, Users } from "lucide-react";

export const CORE_THRESHOLD = 88;

export const skillGroups = [
  {
    category: "Languages & Databases",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 95 },
      { name: "C", level: 90 },
      { name: "C++", level: 90 },
      { name: "PHP", level: 90 },
    ],
  },
  {
    category: "Frameworks & ML",
    icon: Layers,
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 88 },
      { name: "Computer Vision", level: 88 },
      { name: "Natural Language Processing", level: 88 },
      { name: "Speech Recognition", level: 88 },
      { name: "Data Analysis", level: 88 },
      { name: "Data Visualization", level: 88 },
      { name: "ReactJS", level: 80 },
      { name: "React Native", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Laravel", level: 85 },
      { name: "ExpressJS", level: 70 },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 90 },
      { name: "Canva", level: 90 },
      { name: "PowerBI", level: 85 },
      { name: "Tableau", level: 80 },
    ],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 95 },
      { name: "Team Collaboration", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 90 },
      { name: "Adaptability", level: 90 },
      { name: "Time Management", level: 90 },
      { name: "Public Speaking", level: 90 },
    ],
  },
];
