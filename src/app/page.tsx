import { ReactElement } from "react";
import type { Metadata } from "next";
import Header from "@/components/CreativeAgency/Header";
import Footer from "@/components/CreativeAgency/Footer";
import Testimonial from "@/components/CreativeAgency/Testimonial";
import BrandSection from "@/components/CreativeAgency/BrandSection";
import ServiceSection from "@/components/CreativeAgency/HomeServicesSection";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import AboutSection from "@/components/CreativeAgency/AboutSection";
import Hero from "@/components/CreativeAgency/HeroSection";
import WorkSection from "@/components/CreativeAgency/WorkSection";

// constant data
import heroData from "@/constant/CreativeAgency/hero";
import aboutData from "@/constant/CreativeAgency/about";
import processData from "@/constant/CreativeAgency/process";
import servicesData from "@/constant/CreativeAgency/services";
import workData from "@/constant/CreativeAgency/work";
import testimonialsData from "@/constant/CreativeAgency/brands";
import testimonialData from "@/constant/CreativeAgency/testimonial";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";
import PortfolioSliderSection from "@/components/CreativeAgency/PortfolioDetails/PortfolioSliderSection";
import portfolioSliderData from "@/constant/CreativeAgency/PortfolioDetails/portfolio-data";

export const metadata: Metadata = {
  title: "Creative Company || Inteliio - Creative Digital Company NextJS Template",
  description: "Welcome to Inteliio Creative Company template — a stylish and modern Next.js homepage designed for creative agencies. Showcasing portfolio, services, team, and innovative projects with performance and SEO in mind.",
  keywords: [
    " Inteliio creative agency",
    "NextJS creative company template",
    "creative company homepage",
    "modern company website",
    "portfolio showcase",
    "creative services",
    "digital company template",
    "NextJS startup template",
    "responsive company website",
    "SEO optimized company site",
    "agency team page",
    "design portfolio",
    "creative project showcase",
    "frontend development",
    "agency landing page",
    "professional company template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Creative Company Page",
  },
};

const CreativeAgencyPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-creative-agency">
      <Header />
      <SmoothScroll>
        <main>
          <Hero data={heroData} />
          <AboutSection data={aboutData} />
          <ServiceSection data={servicesData} />
          <WorkSection data={workData} />
          <BrandSection data={testimonialsData} />
          <ProcessSection data={processData} />
          <Testimonial data={testimonialData} />
          <PortfolioSliderSection data={portfolioSliderData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};

export default CreativeAgencyPage;
