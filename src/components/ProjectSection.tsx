import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

import { allWebApplications, featuredWebApplications } from "@/data/projects";
import { Button } from "@/components/ui/button";
import WebProjectCard from "@/components/WebProjectCard";

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = showAllProjects ? allWebApplications : featuredWebApplications;

  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <WebProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "Show Less Projects" : "View All Projects"}
            <ArrowRight
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                showAllProjects ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
