export type WebApplicationProject = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "Full Stack" | "Frontend" | "Backend";
  demo: string;
  code: string;
};

export type GameProject = {
  slug: string;
  title: string;
  description: string;
  image: string;
  videoPreviewUrl: string;
  videoLink: string;
  downloadLink: string;
  repoLink: string;
  detailsLink: string;
  engine: string;
  language: string;
  stack: string;
  instructionSummary: string;
  shootingControls?: string[];
};

const initialWebApplications: WebApplicationProject[] = [
  {
    title: "Fast Food Checkout System",
    description:
      "A complete fast food ordering system with menu browsing, cart functionality, and order management features.",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    type: "Full Stack",
    demo: "https://fullstackweek-donalds-nu.vercel.app/fsw-donalds",
    code: "https://github.com/RodrigoNunes2004/fullstackweek-donalds.git",
  },
  {
    title: "Currency Converter App",
    description:
      "A real-time currency converter application with live exchange rates and intuitive user interface.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["JavaScript", "API Integration", "CSS"],
    type: "Frontend",
    demo: "https://currency-converter-zeta-woad.vercel.app/",
    code: "https://github.com/RodrigoNunes2004/currency_converter.git",
  },
  {
    title: "Barber Booking System",
    description:
      "A comprehensive booking system for barbershops with appointment scheduling, service management, and client tracking.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "Next.js", "PostgreSQL", "Authentication"],
    type: "Full Stack",
    demo: "https://fullstackweek-barber-kjtw.vercel.app/",
    code: "https://github.com/RodrigoNunes2004/fullstackweek-barber.git",
  },
];

const additionalWebApplications: WebApplicationProject[] = [
  {
    title: "Catering Calculator Pro",
    description:
      "A comprehensive catering calculator application for event planning with cost estimation and menu management features.",
    image: "/images/caterCalcPro.png",
    tags: ["React", "Vite", "TypeScript", "PostgreSQL", "Authentication"],
    type: "Full Stack",
    demo: "https://cater-calc-pro.vercel.app/",
    code: "https://github.com/RodrigoNunes2004/caterCalcPro.git",
  },
  {
    title: "Banking System",
    description:
      "A comprehensive banking system application with account management, transactions, and secure authentication features.",
    image: "/images/bankingSystem.png",
    tags: [
      "ASP.NET",
      "C#",
      "HTML",
      "JavaScript",
      "CSS",
      "SQL",
      "Azure SQL Database",
    ],
    type: "Full Stack",
    demo: "https://banking-system-v3.vercel.app/",
    code: "https://github.com/RodrigoNunes2004/BankingSystem.git",
  },
  {
    title: "Tide Desk Sales System",
    description:
      "TideDesk is a SaaS platform for surf schools with booking, equipment, instructor, customer, and revenue management.",
    image: "/images/TD_img.png",
    tags: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Stripe",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    type: "Full Stack",
    demo: "https://tidedesk.vercel.app/",
    code: "https://github.com/RodrigoNunes2004/tidedesk.git",
  },
];

export const featuredWebApplications = initialWebApplications;
export const allWebApplications = [
  ...initialWebApplications,
  ...additionalWebApplications,
];

export const gameProjects: GameProject[] = [
  {
    slug: "shootersam",
    title: "ShooterSam",
    description:
      "A first-person shooter game built with Unreal Engine using a hybrid Blueprint and C++ workflow.",
    image: "/images/shooter-sam.png",
    videoPreviewUrl:
      "https://drive.google.com/file/d/1Ehp5XSvebVnHfrjuyzlZmSovqs3mcmxm/preview",
    videoLink:
      "https://drive.google.com/file/d/1Ehp5XSvebVnHfrjuyzlZmSovqs3mcmxm/view?usp=drive_link",
    downloadLink:
      "https://drive.google.com/file/d/11w0vF0y7CwpCGrQl2vX1us7js8EHYe1M/view",
    repoLink: "https://github.com/RodrigoNunes2004/ShooterSam",
    detailsLink: "/projects/games/shootersam",
    engine: "Unreal Engine",
    language: "C++",
    stack: "Blueprints + C++",
    instructionSummary:
      "Download the ZIP file, extract it to your computer, and launch the executable to start playing.",
    shootingControls: [
      "Right Mouse Button — Shoot",
      "Hold Left Mouse Button — Aim",
    ],
  },
  {
    slug: "obstacleassault",
    title: "ObstacleAssault",
    description:
      "A physics-based obstacle navigation game created in Unreal Engine with Blueprint systems and C++ gameplay logic.",
    image: "/images/obstacle-assault.png",
    videoPreviewUrl:
      "https://drive.google.com/file/d/1GGkmtcAf26cK2GiOrSb7foUsK6MGkDzj/preview",
    videoLink:
      "https://drive.google.com/file/d/1GGkmtcAf26cK2GiOrSb7foUsK6MGkDzj/view?usp=drive_link",
    downloadLink:
      "https://drive.google.com/file/d/1bZlHcGivfzNRiFmfD4ixsSEHWcqde9Zv/view",
    repoLink: "https://github.com/RodrigoNunes2004/ObstacleAssault",
    detailsLink: "/projects/games/obstacleassault",
    engine: "Unreal Engine",
    language: "C++",
    stack: "Blueprints + C++",
    instructionSummary:
      "Download the ZIP file, unzip the project folder, and run the executable to jump into the level.",
  },
];

export const getGameBySlug = (slug: string) =>
  gameProjects.find((game) => game.slug === slug);
