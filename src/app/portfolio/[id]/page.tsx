import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import Header from "@/components/CreativeAgency/Header";
import Footer from "@/components/CreativeAgency/Footer";
import PortfolioDetails from "@/components/CreativeAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/CreativeAgency/PortfolioDetails/PortfolioSliderSection";
import portfolioSliderData from "@/constant/CreativeAgency/PortfolioDetails/portfolio-data";
import workData, { IProject } from "@/constant/CreativeAgency/workTwo";

// ✅ Generate metadata dynamically based on project
export async function generateMetadata({ params }: any): Promise<Metadata> {
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

// ✅ Correct page component (App Router expects a default function)
export default function Page({ params }: any) {
  const projectId = parseInt(params.id);
  const project = workData.projects.find((p) => p.id === projectId) as IProject;

  // ✅ Always return valid JSX
  if (!project?.projectDetails) {
    return (
      <div className="body-wrapper body-inner-page">
        <Header />
        <main>
          <Breadcrumb title="PROJECT NOT FOUND" pageName="PROJECT DETAILS" />
          <div className="text-center py-40">
            <h2>Project not found</h2>
            <p>The requested project could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb title={project.title} pageName="PROJECT DETAILS" />
        <PortfolioDetails data={project.projectDetails} />
        <PortfolioSliderSection data={portfolioSliderData} />
      </main>
      <Footer />
    </div>
  );
}
