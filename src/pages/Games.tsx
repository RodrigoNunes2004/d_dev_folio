import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { gameProjects } from "@/data/projects";

const Games = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Games</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Browse my Unreal Engine game projects, watch gameplay showcases, and
          download playable builds with setup instructions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {gameProjects.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
