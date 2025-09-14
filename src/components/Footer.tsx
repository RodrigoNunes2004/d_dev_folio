import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-card text-card-foreground py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src="/lovable-uploads/b1e585cf-4cab-4aa1-9b38-db1e2cd458e9.png"
                alt="DDev Logo"
                className="h-6 w-6"
              />
              <span className="text-xl font-bold text-primary">
                DDev Portfolio
              </span>
            </div>
            <p className="text-muted-foreground">
              Building digital experiences that matter.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                {["home", "about", "skills", "projects", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block text-muted-foreground hover:text-primary transition-colors capitalize"
                    >
                      {section}
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/RodrigoNunes2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rodrigo-fraga-nunes-82418675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/RodrigoDeFraga1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Legal
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 DDev Portfolio. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-muted-foreground text-sm">
            Made with ❤️ using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
