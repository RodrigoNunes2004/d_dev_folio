export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
  photo?: string;
  linkedin?: string;
  github?: string;
};

/**
 * Public testimonial cards. Mobile numbers and emails from the request
 * replies stay out of this file and are not shown on the site.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Daniele Costa",
    role: "UX Designer",
    quote:
      "I worked with Rodrigo on Mission 5, a Z Energy station locator project. I was part of the UX design team, and Rodrigo was part of the development team. We handed over our high-fidelity designs so his team could build selected pages. During a week of daily meetings, we reviewed progress, answered questions about the designs and discussed how to bring the prototype into development.",
    photo: "/images/testimonials/DanieleCosta.jpg",
    linkedin: "https://www.linkedin.com/in/danieleocosta/",
    github: "https://github.com/DanieleOCosta",
  },
  {
    name: "Siobhan McKinney",
    role: "Teammate",
    company: "Mission Ready",
    quote:
      "Worked with Rodrigo across several team projects at Mission Ready and he was always someone I could rely on. He took the lead on a lot of our team organisation, kept communication going and was always willing to jump in and help when one of us was stuck. He is really strong technically, but what stood out to me most was his patience and the way he worked with the rest of the team rather than just focusing on his own part. I really enjoyed working with him and would happily work with him again.",
    photo: "/images/testimonials/Siobhan.jpg",
    linkedin: "https://www.linkedin.com/in/sio-mckinney-934700283/",
    github: "https://github.com/MasterJedi-crypto",
  },
  {
    name: "Andrew Ford",
    role: "Level 5 Trainer",
    company: "Mission Ready",
    quote:
      "I was lucky enough to train Rodrigo for Level 5 at Mission Ready. He is a great student and open to feedback, always eager to improve his skills.",
    photo: "/images/testimonials/AndrewFord.jpg",
    linkedin: "https://www.linkedin.com/in/andrewjamesford/",
    github: "https://github.com/andrewjamesford",
  },
  {
    name: "Bonnie Wall",
    role: "Level 4 Trainer",
    company: "Mission Ready",
    quote:
      "Rodrigo was an enthusiastic candidate with Mission Ready. He was inquisitive, personable, always ready to discuss and try new ideas. He was an active member of his team, who encouraged others and devised methods to increase collaboration and progress projects. He showed a good ability to refactor and write clean, minimal code. He was conscious of best practices and strived to follow them, as evidenced in his descriptive commit history in GitHub. Rodrigo is dependable, positive and has a future-focused approach to coding.",
    photo: "/images/testimonials/BonnieWall.jpg",
    linkedin: "https://www.linkedin.com/in/bonnie-wall",
    github: "https://github.com/bone-bone",
  }
];
