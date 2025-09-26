import React from "react";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";
import computerImg from "@/assets/img/computerImg.png";

const AboutSection = () => {
  const handleResumeDownload = () => {
    // For mobile devices, open in new tab instead of forcing download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, open PDF in new tab
      window.open("/resume_d_dev.pdf", "_blank");
    } else {
      // On desktop, trigger download
      const link = document.createElement("a");
      link.href = "/resume_d_dev.pdf";
      link.download = "Rodrigo-De-Fraga-Nunes-Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <Card className="w-64 h-64 overflow-hidden shadow-lg">
              <img
                src={computerImg}
                alt="About Rodrigo - Coding Setup"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              Hi, I'm Rodrigo — a full-stack web developer with a background in
              IT and a passion for building clean, scalable, and impactful
              digital experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialise in crafting modern web applications using React,
              Next.js, TypeScript, Node.js, and PostgreSQL, with a strong focus
              on developeing experience and UI precision through tools like
              Shadcn UI. My journey blends hands-on technical troubleshooting
              with creative problem-solving, shaped by years of discipline in
              the culinary world and now sharpened through real-world coding
              projects and continuous learning.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether I'm debugging Docker environments, optimising workflows
              with Git, or refining user interfaces for performance and
              accessibility, I bring a solution-driven mindset and a deep
              commitment to quality. I thrive in collaborative environments and
              love turning complex challenges into elegant, maintainable code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Mail className="text-primary mr-2 h-4 w-4" />
                <span className="text-muted-foreground">
                  <strong>Email:</strong> rdefraganunes@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-2 h-4 w-4" />
                <span className="text-muted-foreground">
                  <strong>Phone:</strong> +64 (21)2253555
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-2 h-4 w-4" />
                <span className="text-muted-foreground">
                  <strong>Location:</strong> Tauranga New Zealand
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                className="shadow-lg"
                onClick={() =>
                  window.open("https://github.com/RodrigoNunes2004", "_blank")
                }
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="secondary"
                className="shadow-lg"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rodrigo-fraga-nunes-82418675",
                    "_blank"
                  )
                }
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="shadow-lg"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
