import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WebApplications from "./pages/WebApplications";
import Games from "./pages/Games";
import ShooterSam from "./pages/ShooterSam";
import ObstacleAssault from "./pages/ObstacleAssault";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/projects/web-applications"
            element={<WebApplications />}
          />
          <Route path="/projects/games" element={<Games />} />
          <Route
            path="/projects/games/shootersam"
            element={<ShooterSam />}
          />
          <Route
            path="/projects/games/obstacleassault"
            element={<ObstacleAssault />}
          />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
