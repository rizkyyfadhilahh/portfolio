import { ArrowUpRight, BrainCircuit, BarChartBig, Database, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

const focusAreas = [
  { icon: BrainCircuit, title: "Data Science", tagline: "Models that ship" },
  { icon: BarChartBig, title: "Data Analytics", tagline: "Insights that guide" },
  { icon: Database, title: "Data Engineering", tagline: "Pipelines that hold up" },
  { icon: Layout, title: "Web Development", tagline: "Interfaces people use" },
];

export const WhatIDo = () => {
  return (
    <section className="relative border-t border-border px-4 py-24 md:py-32">
      <div className="container mx-auto text-left">
        <Reveal>
          <p className="section-label mb-6">What I Do</p>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Turning messy data into{" "}
            <span className="font-serif italic text-primary">models</span> and{" "}
            <span className="font-serif italic text-primary">products</span> people can use
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Computer Science student proficient across the end-to-end data science
            lifecycle — from exploratory analysis to model deployment — with
            production-grade web development on the side.
          </p>
          <Link
            to="/about"
            className="btn-outline group inline-flex items-center gap-3 !rounded-full !py-2 !pl-6 !pr-2"
          >
            More about me
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-2 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </Reveal>

        <StaggerContainer
          stagger={0.1}
          className="mt-16 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {focusAreas.map((area, i) => {
            const { title, tagline } = area;
            const Icon = area.icon;
            return (
            <StaggerItem key={title}>
              <div className="group relative border-t border-border pb-10 pt-6">
                <span className="pointer-events-none absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-xl font-medium text-foreground">{title}</h3>
                <p className="mt-1.5 font-serif text-lg italic text-muted-foreground">
                  {tagline}
                </p>
              </div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
