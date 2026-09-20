import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiPhp,
  SiC,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiExpress,
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { DomoIcon } from "@/components/icons/DomoIcon";
import { BarChart3, Users, MessagesSquare, Lightbulb, Timer } from "lucide-react";

// kind: "hard" | "soft" — icons appear only on the expanded row (label doubles as tooltip)
export const skillGroups = [
  {
    id: "languages",
    kind: "hard",
    title: "Programming Languages",
    description:
      "I work across systems and application languages — Python for data and machine learning, TypeScript and JavaScript for the web, plus Java, PHP, C, and C++ from my computer science foundations. I pick the language that fits the problem instead of forcing one stack onto everything.",
    keywords: ["Python", "JavaScript", "TypeScript", "Java", "PHP", "C", "C++", "SQL"],
    icons: [
      { Icon: SiPython, label: "Python" },
      { Icon: SiJavascript, label: "JavaScript" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiOpenjdk, label: "Java" },
      { Icon: SiPhp, label: "PHP" },
      { Icon: SiC, label: "C" },
      { Icon: SiCplusplus, label: "C++" },
    ],
  },
  {
    id: "ml-ai",
    kind: "hard",
    title: "Machine Learning & AI",
    description:
      "I build end-to-end machine learning solutions, from exploratory analysis and feature engineering to training, evaluation, and deployment. My experience spans NLP, computer vision, speech recognition, deep learning, and recommendation systems — backed by a 1st place national NLP win and a Top 28 finish in a national data science competition.",
    keywords: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Speech Recognition",
      "Generative AI",
      "Recommendation Systems",
      "PyTorch",
      "Scikit-learn",
    ],
    icons: [
      { Icon: SiPytorch, label: "PyTorch" },
      { Icon: SiScikitlearn, label: "Scikit-learn" },
      { Icon: SiPandas, label: "Pandas" },
      { Icon: SiNumpy, label: "NumPy" },
    ],
  },
  {
    id: "data",
    kind: "hard",
    title: "Data & Analytics",
    description:
      "I turn raw, messy data into decisions people can act on: cleaning and modeling data in SQL, building ETL pipelines, and delivering BI dashboards (Power BI, Tableau, DOMO) and automated Excel reports — including a 6-year reporting workflow that cut a recurring 1–2 month manual effort down to a simple data refresh.",
    keywords: [
      "PostgreSQL",
      "MySQL",
      "ETL Pipelines",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "DOMO",
      "Excel",
    ],
    icons: [
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: SiMysql, label: "MySQL" },
      { Icon: IoLogoTableau, label: "Tableau" },
      { Icon: BarChart3, label: "Power BI" },
      { Icon: DomoIcon, label: "DOMO" },
      { Icon: PiMicrosoftExcelLogo, label: "Excel" },
    ],
  },
  {
    id: "web",
    kind: "hard",
    title: "Web & Mobile Development",
    description:
      "I build full-stack products from interface to database — responsive React and TypeScript front-ends styled with Tailwind CSS, backed by Laravel or Express REST APIs and relational databases. I've also shipped a React Native mobile app and designed platforms with accessibility in mind.",
    keywords: [
      "ReactJS",
      "React Native",
      "Tailwind CSS",
      "Laravel",
      "ExpressJS",
      "REST APIs",
    ],
    icons: [
      { Icon: SiReact, label: "React / React Native" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
      { Icon: SiLaravel, label: "Laravel" },
      { Icon: SiExpress, label: "Express" },
    ],
  },
  {
    id: "tools",
    kind: "hard",
    title: "Tools & Collaboration",
    description:
      "I'm comfortable in the tooling that keeps teams moving: Git and GitHub for version control, Figma and Canva for design and prototyping, and Jira, Confluence, and Agile Scrum rituals for planning and delivery — plus exposure to enterprise platforms such as SAP MM and Microsoft Power Automate.",
    keywords: [
      "Git",
      "GitHub",
      "Figma",
      "Canva",
      "Jira",
      "Confluence",
      "Agile Scrum",
      "SAP MM",
    ],
    icons: [
      { Icon: SiGit, label: "Git" },
      { Icon: SiGithub, label: "GitHub" },
      { Icon: SiFigma, label: "Figma" },
      { Icon: SiJira, label: "Jira" },
      { Icon: SiConfluence, label: "Confluence" },
    ],
  },
  {
    id: "soft",
    kind: "soft",
    title: "Leadership & Communication",
    description:
      "Beyond code, I lead and communicate. I founded and grew a 900+ member community, mentored 60+ students through orientation, led a 7-member engineering team with Agile Scrum, and presented technical work to stakeholders and competition juries — while adapting quickly across three different engineering rotations in a single internship.",
    keywords: [
      "Leadership",
      "Communication",
      "Team Collaboration",
      "Problem Solving",
      "Critical Thinking",
      "Adaptability",
      "Time Management",
      "Public Speaking",
    ],
    icons: [
      { Icon: Users, label: "Leadership & Teamwork" },
      { Icon: MessagesSquare, label: "Communication" },
      { Icon: Lightbulb, label: "Problem Solving" },
      { Icon: Timer, label: "Time Management" },
    ],
  },
];
