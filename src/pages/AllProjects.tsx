import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import GameCard from "@/components/GameCard";
import WebProjectCard from "@/components/WebProjectCard";
import { Button } from "@/components/ui/button";
import {
  aiModelProjects,
  allWebApplications,
  gameProjects,
} from "@/data/projects";

const AllProjects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Web applications, games, and AI models in one place.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-8">Web Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allWebApplications.map((project) => (
              <WebProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Games</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {gameProjects.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">AI Models</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiModelProjects.map((project) => (
              <WebProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProjects;
