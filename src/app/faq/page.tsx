import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import FaqSection from "@/components/CreativeAgency/Faq/FaqSection";
import ContactSection from "@/components/CreativeAgency/Contact/ContactSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";

// all data
import contactData from "@/constant/CreativeAgency/Contact/contact";
import faqData from "@/constant/CreativeAgency/faq/faq-data";

export const metadata: Metadata = {
  title: "FAQ || Inteliio - Creative Digital Company NextJS Template",
  description: "Find answers to frequently asked questions about inteliio, our Next.js templates, and services. Get quick support and clear information to help you make the most of our company solutions.",
  keywords: [
    " Inteliio FAQ page",
    "NextJS FAQ template",
    "agency frequently asked questions",
    "customer support FAQ",
    "digital company FAQ",
    "startup FAQ page",
    "common questions",
    "template support",
    "NextJS support page",
    "responsive FAQ design",
    "professional FAQ layout",
    "help and support",
    "template information",
    "client questions",
    "FAQ page design",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "FAQ Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb title="FAQ" pageName="FAQ" />
        <FaqSection data={faqData} />
        <ContactSection data={contactData} />
        <FaqSection type={2} imageSrc={2} data={faqData} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
