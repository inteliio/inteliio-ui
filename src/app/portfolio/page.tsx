import { Metadata } from "next";
import { ReactElement } from "react";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import WorkSection from "@/components/CreativeAgency/WorkTwoSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";

// all data
import workData from "@/constant/CreativeAgency/workTwo";

export const metadata: Metadata = {
  title: "Portfolio Grid || Inteliio - Creative Digital Company NextJS Template",
  description: "Showcase your projects in a clean and organized grid layout with the Inteliio Portfolio Grid template. Designed for creative professionals to display work with a modern, responsive, and SEO-friendly Next.js structure.",
  keywords: [
    " Inteliio portfolio grid",
    "NextJS portfolio grid template",
    "creative portfolio grid",
    "responsive portfolio layout",
    "SEO optimized portfolio grid",
    "digital company portfolio grid",
    "startup portfolio showcase",
    "project gallery",
    "professional portfolio grid",
    "modern portfolio display",
    "frontend developer portfolio",
    "creative work grid",
    "NextJS project grid",
    "grid based portfolio",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Grid Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />

      <main>
        <Breadcrumb title="OUR WORK" subTitle="Portfolio Grid" pageName="OUR WORK" />
        <WorkSection pageInner={true} type={7} data={workData} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
