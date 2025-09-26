import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4" 
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rizky
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Fadhilah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I am a Computer Science student with a strong interest in machine learning and web development. I am seeking opportunities to contribute to an innovative team and apply my skills to build effective solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center opacity-0 animate-fade-in-delay-4">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-lg flex items-center justify-center">
            <span className="text-muted-foreground">Your Photo Here</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};