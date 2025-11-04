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

export const metadata: Metadata = {
  title: "Creative Agency || Averto - Creative Digital Agency NextJS Template",
  description: "Welcome to Averto Creative Agency template — a stylish and modern Next.js homepage designed for creative agencies. Showcasing portfolio, services, team, and innovative projects with performance and SEO in mind.",
  keywords: [
    "Averto creative agency",
    "NextJS creative agency template",
    "creative agency homepage",
    "modern agency website",
    "portfolio showcase",
    "creative services",
    "digital agency template",
    "NextJS startup template",
    "responsive agency website",
    "SEO optimized agency site",
    "agency team page",
    "design portfolio",
    "creative project showcase",
    "frontend development",
    "agency landing page",
    "professional agency template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Creative Agency Page",
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
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};

export default CreativeAgencyPage;
