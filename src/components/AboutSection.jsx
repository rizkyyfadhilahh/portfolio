import { ArrowUpRight, BarChartBig, BrainCircuit, Database, Download, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const CV_URL =
  "https://drive.google.com/file/d/1fEkscZjsG1Wjg51o6-Ege_FoCak8k0CD/view?usp=sharing";
const ease = [0.22, 1, 0.36, 1];

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Data Science",
    description: "Building and deploying machine learning models to solve real-world problems.",
  },
  {
    icon: BarChartBig,
    title: "Data Analytics",
    description: "Analyzing complex datasets to extract insights and inform decision-making.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing data pipelines that keep data clean, reliable, and accessible.",
  },
  {
    icon: Layout,
    title: "Web Development",
    description: "Creating responsive interfaces to visualize data and interact with models.",
  },
];

const facts = [
  { label: "Based in", value: "Jakarta, Indonesia" },
  { label: "Studying", value: "Computer Science · Intelligent Systems" },
  { label: "University", value: "BINUS · Class of 2027" },
  { label: "Currently", value: "IT Digital Intern · SMART Tbk" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] -mt-20 items-center overflow-hidden px-4 pt-32 pb-16 md:pt-28"
    >
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container relative mx-auto text-left"
      >
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-8">
            <Motion.p variants={itemVariants} className="section-label">
              About
            </Motion.p>

            <Motion.h1
              variants={itemVariants}
              className="text-5xl font-medium leading-[1.04] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Focused on data,{" "}
              <span className="font-serif italic text-primary">comfortable end-to-end.</span>
            </Motion.h1>

            <Motion.div variants={itemVariants} className="h-px w-16 bg-primary" />

            <Motion.div
              variants={itemVariants}
              className="max-w-xl space-y-5 leading-relaxed text-muted-foreground"
            >
              <p>
                I&apos;m a Computer Science student who enjoys turning complex datasets into
                clear, actionable solutions — and building the products around them.
              </p>
              <p>
                I&apos;m comfortable across the full data science lifecycle, from exploratory
                analysis to model deployment, and I&apos;m looking for a team where I can apply
                that in production.
              </p>
            </Motion.div>

            <Motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="btn-primary group inline-flex items-center gap-3 !rounded-full !py-2 !pl-6 !pr-2"
              >
                Get in touch
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 !rounded-full"
              >
                Download CV
                <Download size={15} />
              </a>
            </Motion.div>
          </div>

          <Motion.div variants={itemVariants} className="relative lg:border-l lg:border-border lg:pl-14">
            <span className="absolute -left-[5px] top-0 hidden h-2.5 w-2.5 rounded-full bg-primary lg:block" />
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Focus areas
            </p>
            <ul className="border-t border-border">
              {focusAreas.map((area, i) => {
                const { title, description } = area;
                const Icon = area.icon;
                return (
                <li key={title} className="group relative border-b border-border">
                  <div className="flex items-start gap-5 py-6">
                    <span className="pt-1 font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-1">
                      <h3 className="text-lg font-medium text-foreground">{title}</h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                  </div>
                  <span className="pointer-events-none absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </li>
                );
              })}
            </ul>
          </Motion.div>
        </div>

        <Motion.dl
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 md:grid-cols-4"
        >
          {facts.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-2 text-sm text-foreground">{value}</dd>
            </div>
          ))}
        </Motion.dl>
      </Motion.div>
    </section>
  );
};
