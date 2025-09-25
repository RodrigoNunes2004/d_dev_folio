import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, TrendingUp, Wrench, Terminal, MousePointer } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import {
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiNpm,
  SiFlutter,
  SiAndroidstudio,
} from "react-icons/si";

const SkillsSection = () => {
  const isMobile = useIsMobile();

  // Debug: Log the mobile state
  //console.log("isMobile:", isMobile);
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js/Express", level: 88 },
    { name: "HTML/CSS", level: 93 },
  ];

  const professionalSkills = [
    { name: "Problem Solving", level: 94 },
    { name: "Teamwork", level: 90 },
    { name: "Communication", level: 88 },
    { name: "Project Management", level: 85 },
  ];

  const tools = [
    { name: "Git", Icon: SiGit },
    { name: "Docker", Icon: SiDocker },
    { name: "AWS", Icon: SiAmazonwebservices },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Figma", Icon: SiFigma },
    { name: "VS Code", Icon: Code },
    { name: "npm/yarn", Icon: SiNpm },
    { name: "Flutter", Icon: SiFlutter },
    { name: "Cursor", Icon: MousePointer },
    { name: "Android Studio", Icon: SiAndroidstudio },
    { name: "Visual Studio", Icon: Terminal },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="text-primary mr-2 h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="text-primary mr-2 h-5 w-5" />
                Professional Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {professionalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Wrench className="text-primary mr-2 h-5 w-5" />
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              {tools.map((tool) => {
                console.log(
                  "Rendering tool:",
                  tool.name,
                  "isMobile:",
                  isMobile
                );
                return (
                  <div
                    key={tool.name}
                    className={`flex items-center bg-secondary py-2 rounded-full ${
                      isMobile ? "px-3" : "px-4"
                    }`}
                  >
                    <tool.Icon
                      className={`text-primary ${
                        isMobile ? "h-5 w-5" : "h-4 w-4 mr-2"
                      }`}
                    />
                    {!isMobile && (
                      <span className="text-muted-foreground">{tool.name}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
