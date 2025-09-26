import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NLP based Regression-for Predicting Incarceration-Duration from Court Transcripts",
    description: "Secured 1st Place out of 109 teams in our debut national NLP competition by developing a highly efficient regression model. Our key innovation was a custom-designed hybrid TF-IDF architecture that was not only significantly more computationally and resource-efficient but also outperformed state-of-the-art models like IndoBERT in analyzing extremely noisy legal text.",
    image: "public/photo/NLP (2).png",
    tags: ["Python", , "Machine Learning", "Natural Language Processing", "Deep Learning","Regression"],
    githubUrl: "https://github.com/rizkyyfadhilahh/NLP-based-Regression-for-Predicting-Incarceration-Duration-from-Court-Transcripts",
  },
  {
    id: 2,
    title: "Multi-Modal Machine Learning for Printed Circuit Boards Defect Detection",
    description: "Multi-Modal AI for PCB Defect Detection A national data science competition project that achieved 28th place out of 210+ teams. As the Computer Vision specialist, I developed a deep learning model to visually classify manufacturing defects.",
    image: "public/photo/PCB_Defect.png",
    tags: ["Python", , "Machine Learning", "Deep Learning", "Computer Vision", "Classification"],
    githubUrl: "https://github.com/rizkyyfadhilahh/Multi-Modal-Machine-Learning-for-Printed-Circuit-Boards-Defect-Detection",
  },
  {
    id: 3,
    title: "Battery Remaining Useful Life Prediction",
    description: "From raw battery data to a live predictive web app, this project delivers a complete, end-to-end solution for forecasting battery health and operational longevity. This project demonstrates the full machine learning lifecycle, from insightful data visualization in Power BI to model development and final deployment. We architected a solution to predict the Remaining Useful Life (RUL) of batteries—a crucial metric for industrial asset management. At the core of this project is a Random Forest Regressor, chosen for its robustness and precision, which has been trained on the Battery_RUL.csv dataset.",
    image: "public/photo/BatteryRUL.png",
    tags: ["Python", "Machine Learning", "Regression"],
    githubUrl: "https://github.com/rizkyyfadhilahh/Battery_RemainingUseLife_Prediction",

  },
  {
    id: 4,
    title: "ablecareers",
    description: "Focused on bridging the employment gap, Ablecareers is a web platform designed to empower people with disabilities by providing a fully accessible and user-friendly portal to find inclusive job opportunities and training.",
    image: "public/photo/ablecareers.png",
    tags: ["React", "Javascript", "HTML", "CSS", "PostgreSQL"],
    githubUrl: "https://github.com/rizkyyfadhilahh/ablecareers",
  },
  {
    id: 5,
    title: "TukangIN",
    description: "Finding a reliable artisan is often a challenge, marked by price uncertainty, a lack of professionalism, and the difficulty of locating the right person for a specific job. To solve this, TukangIN was conceived as a web platform aiming to revolutionize how people find skilled labor, while simultaneously creating more job opportunities.",
    image: "public/photo/TukangIN.png",
    tags: ["React", "Typescript", "Supabase"],
    githubUrl: "https://github.com/rizkyyfadhilahh/TukangIN",
  },
  {
    id: 6,
    title: "Recipfy",
    description: "Recipfy, an intuitive mobile recipe application, independently designed and developed using React Native. Inspired by a previous machine learning project, this app serves as the foundation for a future smart recipe platform.",
    image: "public/photo/recipfy.png",
    tags: ["React Native", "Expo"],
    githubUrl: "https://github.com/rizkyyfadhilahh/recipfy",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Recent <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col" // Tambah flex flex-col
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      tag && <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rizkyyfadhilahh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};