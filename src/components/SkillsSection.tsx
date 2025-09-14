import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, TrendingUp, Wrench } from "lucide-react";

const SkillsSection = () => {
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
    "Git",
    "Docker",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "Figma",
    "VS Code",
    "npm/yarn",
    "Flutter",
    "Cursor",
    "Android Studio",
    "Visual Studio",
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
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center bg-secondary px-4 py-2 rounded-full"
                >
                  <span className="text-muted-foreground">{tool}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
