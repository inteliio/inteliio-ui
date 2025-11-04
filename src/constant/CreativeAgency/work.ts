export interface Project {
  tag: string;
  title: string;
  year: string;
  category: string;
  image: string;
  link: string;
}

export interface WorkData {
  sectionTitle: string;
  projects: Project[];
}
const workData: WorkData = {
  sectionTitle: "Featured Work",
  projects: [
    {
      tag: "Focal Studio",
      title: "Interior Design Studio",
      year: "2025",
      category: "WEB DEVELOPMENT // BRANDING DESIGN",
      image: "/assets/inteliio/projects/focalStudio/focalStudio.png",
      link: "https://focalstudio.mk/",
    },
    {
      tag: "CodeLab",
      title: "Education Center",
      year: "2025",
      category: "WEB DEVELOPMENT // BRANDING DESIGN",
      image: "/assets/inteliio/projects/codelab/codelab.png",
      link: "/creative-agency/portfolio-details",
    },
  ],
};

export default workData;
