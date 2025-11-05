export interface IProject {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link: string;
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
      title: "FocalStudio – Interior Design Website",
      tags: ["WEB DESIGN", "BRANDING", "SEO"],
      image: "/assets/inteliio/projects/focalStudio/focalStudio.png",
      link: "https://focalstudio.mk",
    },
    {
      id: 2,
      title: "CodeLab – Programming School Website",
      tags: ["WEB DESIGN", "BRANDING", "SEO"],
      image: "/assets/inteliio/projects/codelab/codelab.png",
      link: "https://codelab.mk",
    },
  ],
};

export default workData;
