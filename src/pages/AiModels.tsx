import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import WebProjectCard from "@/components/WebProjectCard";
import { Button } from "@/components/ui/button";
import { aiModelProjects } from "@/data/projects";

const AiModels = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Models</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Conversational tools built with Gemini, from interview practice to
          insurance recommendations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aiModelProjects.map((project) => (
          <WebProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AiModels;
