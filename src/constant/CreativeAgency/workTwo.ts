export interface IProject {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link: string;
  projectDetails?: IPortfolioDetailsData;
}

export interface IMeta {
  title: string;
  text?: string;
  link?: string;
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

export interface IPortfolioDetailsData {
  meta: IMeta[];
  overview: IOverview;
  problems: IProblem;
  solutions: ISolution;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: IProject[];
}

const workData: WorkData = {
  sectionSubtitle: "Our Portfolio",
  sectionTitle: "Selected works",
  viewAllText: "See All Works",
  viewAllLink: "/portfolio",
  projects: [
    {
      id: 1,
      title: "Focalstudio",
      tags: ["WEB DESIGN", "BRANDING", "SEO"],
      image: "/assets/inteliio/projects/focalStudio/focalStudio.png",
      link: "https://focalstudio.mk",
      projectDetails: {
        meta: [
          { title: "Client", text: "Focalstudio" },
          { title: "Website", link: "https://focalstudio.mk" },
          { title: "Project", text: "Website Design & Development" },
          { title: "Duration", text: "10.10.2025 - 03.11.2025" },
          { title: "Company Size", text: "1-5" },
        ],
        overview: {
          title: "Overview",
          paragraphs: [
            `Focalstudio is an interior design and architecture studio based in Skopje, dedicated to creating timeless, functional, and refined spaces. Their work emphasizes balance, light, and texture — bringing harmony between form and function.`,
            `To strengthen their brand presence and showcase their growing portfolio, we developed their first official website from the ground up. The goal was to craft a digital identity that truly reflects their artistic vision while ensuring technical excellence through modern web technologies, responsive layouts, and SEO best practices.`,
          ],
          images: ["/assets/inteliio/projects/focalStudio/laptop.jpg", "/assets/inteliio/projects/focalStudio/mobile.png", "/assets/inteliio/projects/focalStudio/tablet.png"],
        },
        problems: {
          title: "Challenges",
          paragraphs: [
            `Since Focalstudio previously had no online presence, the main challenge was to establish a brand-new digital ecosystem that visually communicates their architectural identity. The goal was not only to present their projects attractively but also to position the brand as a trusted creative studio in the competitive design market.`,
            `We needed to design an intuitive structure for future scalability — from portfolio presentation to service descriptions — while keeping the website lightweight, fast, and optimized for discovery on search engines.`,
          ],
          images: [],
        },
        solutions: {
          title: "Solutions",
          paragraphs: [
            `Our team designed and developed a fully custom website using **Next.js**, **TypeScript**, and **SCSS modules**, combining aesthetic precision with performance-driven engineering. The design approach focused on minimalism, large imagery, and smooth visual flow — perfectly aligned with Focalstudio’s architectural philosophy.`,
          ],
        },
      },
    },
    {
      id: 2,
      title: "CodeLab – Programming School Website",
      tags: ["WEB DESIGN", "BRANDING", "SEO"],
      image: "/assets/inteliio/projects/codelab/codelab.png",
      link: "https://codelab.com.mk",
      projectDetails: {
        meta: [
          { title: "Client", text: "CodeLab" },
          { title: "Website", link: "https://codelab.com.mk" },
          { title: "Project", text: "Website Redesign & SEO Optimization" },
          { title: "Duration", text: "30.08.2025 - 20.10.2025" },
          { title: "Company Size", text: "5 - 10" },
        ],
        overview: {
          title: "Overview",
          paragraphs: [
            `CodeLab is a leading educational center in Skopje focused on teaching programming and technology to children and teenagers. The academy helps students develop logical thinking, problem-solving skills, and creativity through fun, practical coding lessons.`,
            `The goal of the project was to redesign their outdated website and create a modern, user-friendly digital experience that better communicates the school’s innovative spirit and educational mission. We developed a new, responsive platform built with Next.js — optimized for search engines and designed to increase inquiries and online visibility.`,
          ],
          images: ["/codelab/images/gallery/overview-1.webp", "/codelab/images/gallery/overview-2.webp", "/codelab/images/gallery/overview-3.webp", "/codelab/images/gallery/overview-4.webp"],
        },
        problems: {
          title: "Problems",
          paragraphs: [
            `The previous CodeLab website lacked structure, clarity, and modern aesthetics. Information about courses and schedules was difficult to access, leading to fewer online inquiries and a poor user experience on mobile devices.`,
            `Additionally, the old site had minimal SEO optimization and did not reflect the engaging, forward-thinking nature of CodeLab’s teaching programs. The challenge was to rebuild the platform from the ground up with an intuitive interface and improved performance.`,
          ],
          images: ["/codelab/images/gallery/problem-1.webp", "/codelab/images/gallery/problem-2.webp"],
        },
        solutions: {
          title: "Solutions",
          paragraphs: [
            `We completely redesigned the CodeLab website using **Next.js**, **TypeScript**, and **SCSS modules** to achieve a seamless blend of functionality, speed, and visual appeal. The new layout emphasizes accessibility, clear navigation, and dynamic course sections that allow parents and students to quickly find relevant programs.`,
            `To enhance visibility, we implemented **comprehensive SEO strategies**, including structured metadata, optimized page hierarchy, and fast-loading images. The result is a modern, intuitive, and engaging platform that reflects CodeLab’s mission to make learning programming fun, accessible, and future-oriented.`,
          ],
        },
      },
    },
  ],
};

export default workData;
