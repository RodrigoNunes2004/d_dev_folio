import { ArrowLeft, Download, Github, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

import GameInstructions from "@/components/GameInstructions";
import { GameProject } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type GameDetailPageProps = {
  game: GameProject;
};

const GameDetailPage = ({ game }: GameDetailPageProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/projects/games">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Games
        </Link>
      </Button>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="overflow-hidden rounded-2xl border bg-muted">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
            <p className="text-lg text-muted-foreground leading-8">
              {game.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
              {game.language}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
              {game.engine}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
              {game.stack}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Watch Gameplay
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{game.title} Gameplay</DialogTitle>
                  <DialogDescription>
                    Preview the gameplay showcase before downloading the game.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <iframe
                    src={game.videoPreviewUrl}
                    title={`${game.title} gameplay`}
                    className="h-[420px] w-full rounded-lg border bg-black"
                    allow="autoplay"
                  />
                  <Button asChild variant="outline">
                    <a
                      href={game.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Drive
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Button asChild variant="outline">
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Game
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href={game.repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>

      <GameInstructions shootingControls={game.shootingControls} />
    </div>
  );
};

export default GameDetailPage;
