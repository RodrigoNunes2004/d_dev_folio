import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import WebProjectCard from "@/components/WebProjectCard";
import { Button } from "@/components/ui/button";
import { allWebApplications, featuredWebApplications } from "@/data/projects";

const WebApplications = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = showAllProjects
    ? allWebApplications
    : featuredWebApplications;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Web Applications</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore my portfolio of web applications, including full-stack
          products, frontend experiences, and production-ready business tools.
        </p>
      </div>

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
  );
};

export default WebApplications;
