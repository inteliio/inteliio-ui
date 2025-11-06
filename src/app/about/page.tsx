import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import VideoSection from "@/components/CreativeAgency/About/VideoSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";

import videoData from "@/constant/CreativeAgency/About/video";
import AboutInteliio from "@/components/CreativeAgency/AboutInteliio";
import ContactSection from "@/components/CreativeAgency/Contact/ContactSection";
import contactData from "@/constant/CreativeAgency/Contact/contact";

export const metadata: Metadata = {
  title: "About Us || Inteliio - Creative Digital Company NextJS Template",
  description: "Explore the About Us page of Inteliio – a modern, high-performance company template built with Next.js. Meet the team, learn our mission, and discover why Inteliio is trusted by creative professionals and businesses.",
  keywords: [
    " Inteliio About Us",
    "NextJS about page",
    "agency template",
    "digital agency",
    "creative team template",
    "business website template",
    "responsive NextJS template",
    "modern company design",
    "SEO friendly template",
    "professional web agency",
    "agency team page",
    "company profile",
    "NextJS clean UI",
    "startup website",
    "web design agency",
    "agency portfolio",
    "fast NextJS website",
    "customizable template",
    "about page design",
    " Inteliio template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "About Page",
  },
};

const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />

      <main>
        <Breadcrumb title="ABOUT US" pageName="ABOUT US" />
        <AboutInteliio />
        <VideoSection data={videoData} />
        <ContactSection data={contactData} />
      </main>
      <Footer />
    </div>
  );
};
export default AboutPage;
