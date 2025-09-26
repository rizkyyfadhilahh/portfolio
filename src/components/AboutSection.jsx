import { BrainCircuit, BarChartBig, Database, Layout } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate about Data Science, Machine Learning, and Data Visualization
            </h3>

            <p className="text-muted-foreground">
              As a Computer Science student with a strong focus on data, I thrive on transforming complex datasets into clear, actionable solutions. My dedication to this field is demonstrated by my active participation in data science competitions, including a first-place win that showcased my abilities in predictive analytics and problem-solving.
            </p>

            <p className="text-muted-foreground">
              I am proficient in the end-to-end data science lifecycle—from exploratory analysis to model deployment. I am actively seeking an opportunity where I can contribute my skills in problem-solving, analytics, and software development. 
              My goal is to grow as a well-rounded technology professional within an innovative company.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1U7yKEy0dnP1EcxMf1roryg7slA0xeikG/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Kartu 1: Data Science */}
  <div className="gradient-border p-6 card-hover">
    <div className="flex flex-col items-center gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <BrainCircuit className="h-6 w-6 text-primary" />
      </div>
      <div className="text-center">
        <h4 className="font-semibold text-lg">Data Science</h4>
        <p className="text-muted-foreground">
          Building and deploying machine learning models to solve real-world problems.
        </p>
      </div>
    </div>
  </div>

  {/* Kartu 2: Data Analytics */}
  <div className="gradient-border p-6 card-hover">
    <div className="flex flex-col items-center gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <BarChartBig className="h-6 w-6 text-primary" />
      </div>
      <div className="text-center">
        <h4 className="font-semibold text-lg">Data Analytics</h4>
        <p className="text-muted-foreground">
          Analyzing complex datasets to extract insights and inform decision-making.
        </p>
      </div>
    </div>
  </div>

  {/* Kartu 3: Data Engineer */}
  <div className="gradient-border p-6 card-hover">
    <div className="flex flex-col items-center gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Database className="h-6 w-6 text-primary" />
      </div>
      <div className="text-center">
        <h4 className="font-semibold text-lg">Data Engineer</h4>
        <p className="text-muted-foreground">
          Designing and maintaining data pipelines to ensure data quality and accessibility.
        </p>
      </div>
    </div>
  </div>

  {/* Kartu 4: Web Development */}
  <div className="gradient-border p-6 card-hover">
    <div className="flex flex-col items-center gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Layout className="h-6 w-6 text-primary" />
      </div>
      <div className="text-center">
        <h4 className="font-semibold text-lg">Web Development</h4>
        <p className="text-muted-foreground">
          Creating responsive interfaces to visualize data and interact with models.
        </p>
      </div>
    </div>
  </div>
  
</div>
        </div>
      </div>
    </section>
  );
};