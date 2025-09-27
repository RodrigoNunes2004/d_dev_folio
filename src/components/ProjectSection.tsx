import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fast Food Checkout System",
      description:
        "A complete fast food ordering system with menu browsing, cart functionality, and order management features.",
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      type: "Full Stack",
      demo: "https://fullstackweek-donalds-nu.vercel.app/fsw-donalds",
      code: "https://github.com/RodrigoNunes2004/fullstackweek-donalds.git",
    },
    {
      title: "Currency Converter App",
      description:
        "A real-time currency converter application with live exchange rates and intuitive user interface.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["JavaScript", "API Integration", "CSS"],
      type: "Frontend",
      demo: "https://currency-converter-zeta-woad.vercel.app/",
      code: "https://github.com/RodrigoNunes2004/currency_converter.git",
    },
    {
      title: "Barber Booking System",
      description:
        "A comprehensive booking system for barbershops with appointment scheduling, service management, and client tracking.",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "Next.js", "Database", "Authentication"],
      type: "Full Stack",
      demo: "https://fullstackweek-barber-tcr.vercel.app/",
      code: "https://github.com/RodrigoNunes2004/fullstackweek-barber.git",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                      project.type === "Full Stack"
                        ? "bg-primary/20 text-primary"
                        : project.type === "Frontend"
                        ? "bg-blue-500/20 text-blue-600"
                        : "bg-green-500/20 text-green-600"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.code, "_blank")}
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open("https://github.com/RodrigoNunes2004", "_blank")
            }
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
