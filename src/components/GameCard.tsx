import { Download, Github, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { GameProject } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type GameCardProps = {
  game: GameProject;
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-56 overflow-hidden bg-muted">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <CardTitle className="text-2xl">{game.title}</CardTitle>
          <p className="text-muted-foreground">{game.description}</p>
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
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm leading-6 text-muted-foreground">
          {game.instructionSummary}
        </p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch Gameplay
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{game.title} Gameplay</DialogTitle>
              <DialogDescription>
                Preview the game directly in the browser.
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
                <a href={game.videoLink} target="_blank" rel="noopener noreferrer">
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
            Download ZIP
          </a>
        </Button>

        <Button asChild variant="outline">
          <a href={game.repoLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>

        <Button asChild variant="ghost">
          <Link to={game.detailsLink}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
