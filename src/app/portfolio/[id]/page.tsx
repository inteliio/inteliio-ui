import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import Header from "@/components/CreativeAgency/Header";
import Footer from "@/components/CreativeAgency/Footer";
import PortfolioDetails from "@/components/CreativeAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/CreativeAgency/PortfolioDetails/PortfolioSliderSection";
import portfolioSliderData from "@/constant/CreativeAgency/PortfolioDetails/portfolio-data";

import workData, { IProject } from "@/constant/CreativeAgency/workTwo";

// export const metadata: Metadata = {
//   title: "Portfolio Details || Inteliio - Creative Digital Company NextJS Template",
//   description: "Dive into detailed case studies and project insights with the Inteliio Portfolio Details template. Perfect for showcasing your creative process, technologies used, and impactful results with SEO and performance in mind.",
//   keywords: [
//     " Inteliio portfolio details",
//     "NextJS portfolio details template",
//     "project case study",
//     "detailed portfolio page",
//     "creative project insights",
//     "responsive portfolio details",
//     "SEO optimized project page",
//     "digital company portfolio details",
//     "startup project showcase",
//     "professional portfolio layout",
//     "frontend developer case study",
//     "technology showcase",
//     "creative process display",
//     "modern portfolio details page",
//   ],
//   creator: "PixaVation",
//   other: {
//     developer: "PixaVation",
//     section: "Portfolio Details Page",
//   },
// };

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const projectId = parseInt(params.id);
  const project = workData.projects.find((p) => p.id === projectId) as IProject;

  if (!project) {
    return {
      title: "Project Not Found | Inteliio Portfolio",
      description: "The requested project could not be found.",
    };
  }

  const clientName = project.projectDetails?.meta?.find((m) => m.title === "Client")?.text;
  const projectType = project.projectDetails?.meta?.find((m) => m.title === "Project")?.text;

  const baseKeywords = ["Inteliio", "NextJS portfolio", "software", "website design", "SEO optimized site", "modern web development"];

  const projectKeywords = [project.title, clientName, projectType, "case study", "portfolio project", "website", "web development"].filter(Boolean) as string[];

  return {
    title: `${project.title} | Inteliio Portfolio`,
    description: `Discover how Inteliio built ${clientName}'s ${projectType?.toLowerCase()} — a modern, SEO-optimized, and high-performance digital experience.`,
    keywords: [...baseKeywords, ...projectKeywords],
    openGraph: {
      title: `${project.title} | Inteliio Portfolio`,
      description: `Explore details of ${clientName}'s project — a custom-built solution focused on design, performance, and brand identity.`,
      url: `https://inteliio.com/portfolio/${projectId}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
  };
}

const Home = ({ params }: IParams) => {
  const { id } = params;
  const projectId = parseInt(id);

  console.log("id :", id);
  console.log("projectId :", projectId);

  const project = workData.projects.find((p) => p.id === projectId) as IProject;

  console.log("project :", project);

  if (!project?.projectDetails) return;
  else {
    return (
      <div className="body-wrapper body-inner-page">
        <Header />
        <main>
          <Breadcrumb title="PROJECT DETAILS" pageName="PROJECT DETAILS" />
          <PortfolioDetails data={project?.projectDetails} />
          <PortfolioSliderSection data={portfolioSliderData} />
        </main>
        <Footer />
      </div>
    );
  }
};
export default Home;
