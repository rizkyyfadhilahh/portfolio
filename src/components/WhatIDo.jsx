import { BrainCircuit, BarChartBig, Database, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

const focusAreas = [
  { icon: BrainCircuit, title: "Data Science" },
  { icon: BarChartBig, title: "Data Analytics" },
  { icon: Database, title: "Data Engineering" },
  { icon: Layout, title: "Web Development" },
];

export const WhatIDo = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="section-label mb-3">What I Do</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Turning messy data into models and products people can use
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Computer Science student proficient across the end-to-end data
            science lifecycle — from exploratory analysis to model deployment —
            with production-grade web development on the side.
          </p>
        </Reveal>

        <StaggerContainer className="flex flex-wrap justify-center gap-4 mb-10">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <StaggerItem key={area.title}>
                <Motion.div
                  className="glass flex items-center gap-2 px-4 py-2.5 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4 + (i % 3),
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.06 }}
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {area.title}
                  </span>
                </Motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.15}>
          <Link
            to="/about"
            className="text-sm text-primary hover:underline underline-offset-4"
          >
            More about me &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
