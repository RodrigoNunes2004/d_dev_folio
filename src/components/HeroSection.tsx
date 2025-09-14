import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { TypingText } from "./text/typing-text";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block">Hello, I'm </span>
              <TypingText
                text={["Rodrigo Nunes"]}
                duration={100}
                cursor={false}
                loop={false}
                className="text-primary"
              />
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              <TypingText
                text={[
                  "Full Stack Developer",
                  "React Specialist",
                  "UI/UX Enthusiast",
                  "Freelancer",
                ]}
                duration={80}
                cursor={true}
                loop={true}
                holdDelay={3000}
              />
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg animate-fade-in delay-700">
              I build exceptional digital experiences with clean, efficient code
              and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-1000">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="shadow-lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="shadow-lg"
              >
                My Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300 animate-fade-in delay-300">
              <img
                src="/lovable-uploads/71ce3a13-6b4e-4057-afa1-83c07a72feb8.png"
                alt="Rodrigo Nunes - Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
