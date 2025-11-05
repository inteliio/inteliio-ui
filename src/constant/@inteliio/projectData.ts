// types
export interface IMeta {
  title: string;
  text: string;
}

export interface IOverview {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface IProblem {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface ISolution {
  title: string;
  paragraphs: string[];
}

export interface IProject {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link?: string; // optional external link
  meta: IMeta[];
  overview: IOverview;
  problems: IProblem;
  solutions: ISolution;
}

// main export
const projectsData: IProject[] = [
  {
    id: 1,
    title: "FocalStudio – Interior Design Website",
    tags: ["WEB DESIGN", "BRANDING", "SEO"],
    image: "/assets/inteliio/projects/focalStudio/focalStudio.png",
    link: "https://focalstudio.mk",
    meta: [
      { title: "Client", text: "Focal Studio" },
      { title: "Project", text: "Interior Design Website" },
      { title: "Duration", text: "Jan - Apr 2024" },
      { title: "Services", text: "UI/UX, Web Design, SEO" },
    ],
    overview: {
      title: "Overview",
      paragraphs: [
        `Focal Studio is a contemporary interior design company focused on modern aesthetics and functional design. Their previous website lacked visual identity and responsiveness.`,
        `Inteliio designed and developed a new web experience that reflects their premium identity and showcases their portfolio with immersive visuals and clean typography.`,
      ],
      images: ["/assets/inteliio/projects/focalStudio/overview1.webp", "/assets/inteliio/projects/focalStudio/overview2.webp"],
    },
    problems: {
      title: "Problems",
      paragraphs: [`The old site was slow, unoptimized for mobile, and had no clear user flow. Project showcases were static images without descriptions.`],
      images: ["/assets/inteliio/projects/focalStudio/problem1.webp"],
    },
    solutions: {
      title: "Solutions",
      paragraphs: [`We implemented a Next.js website with dynamic routing, optimized images, and CMS integration. The redesign included an intuitive portfolio navigation and improved SEO.`, `The new design improved load time by 70% and doubled organic traffic within three months.`],
    },
  },
  {
    id: 2,
    title: "CodeLab – Programming School Website",
    tags: ["WEB DESIGN", "BRANDING", "SEO"],
    image: "/assets/inteliio/projects/codelab/codelab.png",
    link: "https://codelab.mk",
    meta: [
      { title: "Client", text: "CodeLab" },
      { title: "Project", text: "Education Website" },
      { title: "Duration", text: "Feb - May 2024" },
      { title: "Services", text: "UI/UX, Branding, SEO" },
    ],
    overview: {
      title: "Overview",
      paragraphs: [
        `CodeLab is a programming academy for kids and teens. The project required a friendly and professional brand identity with a dynamic site to manage classes and events.`,
        `We focused on vibrant colors, clear structure, and a fast CMS-backed site that reflects the creative, educational spirit of the academy.`,
      ],
      images: ["/assets/inteliio/projects/codelab/overview1.webp", "/assets/inteliio/projects/codelab/overview2.webp"],
    },
    problems: {
      title: "Problems",
      paragraphs: [`Their previous site lacked clarity, SEO structure, and had manual updates for schedules. It didn’t reflect their brand energy or professionalism.`],
      images: ["/assets/inteliio/projects/codelab/problem1.webp"],
    },
    solutions: {
      title: "Solutions",
      paragraphs: [`We developed a custom Next.js site with reusable CMS components for courses, schedules, and announcements.`, `The site improved retention and reduced content update time by 60%.`],
    },
  },
];

export default projectsData;
