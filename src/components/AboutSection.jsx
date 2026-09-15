import { BrainCircuit, BarChartBig, Database, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Data Science",
    description:
      "Building and deploying machine learning models to solve real-world problems.",
  },
  {
    icon: BarChartBig,
    title: "Data Analytics",
    description:
      "Analyzing complex datasets to extract insights and inform decision-making.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Designing and maintaining data pipelines to ensure data quality and accessibility.",
  },
  {
    icon: Layout,
    title: "Web Development",
    description:
      "Creating responsive interfaces to visualize data and interact with models.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="section-label mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Focused on data, comfortable end-to-end
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal y={16} className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data science, machine learning, and the products around them
            </h3>

            <p className="text-muted-foreground">
              As a Computer Science student with a strong focus on data, I
              thrive on transforming complex datasets into clear, actionable
              solutions. My dedication to this field is demonstrated by
              active participation in data science competitions, including a
              first-place national win in predictive analytics.
            </p>

            <p className="text-muted-foreground">
              I'm proficient across the end-to-end data science lifecycle —
              from exploratory analysis to model deployment — and I'm
              actively looking for a team where I can apply that in
              production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <a
                href="https://drive.google.com/file/d/1fEkscZjsG1Wjg51o6-Ege_FoCak8k0CD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <StaggerItem
                  key={area.title}
                  className="glass rounded-lg p-6 card-hover"
                >
                  <Icon className="h-5 w-5 text-primary mb-4" />
                  <h4 className="font-semibold mb-1">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
