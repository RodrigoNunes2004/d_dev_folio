import { ExternalLink, Github } from "lucide-react";

import { WebApplicationProject } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type WebProjectCardProps = {
  project: WebApplicationProject;
};

const badgeStyles: Record<WebApplicationProject["type"], string> = {
  "Full Stack": "bg-primary/20 text-primary",
  Frontend: "bg-blue-500/20 text-blue-600",
  Backend: "bg-green-500/20 text-green-600",
};

const WebProjectCard = ({ project }: WebProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div
        className="h-48 overflow-hidden cursor-pointer"
        onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2 gap-4">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded whitespace-nowrap ${badgeStyles[project.type]}`}
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
        <div className="flex justify-between gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            Live Demo
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(project.code, "_blank", "noopener,noreferrer")}
          >
            <Github className="mr-1 h-3 w-3" />
            Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebProjectCard;
