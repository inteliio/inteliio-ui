import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import ServiceSection from "@/components/CreativeAgency/ServiceSection";
import ChooseUsSection from "@/components/CreativeAgency/common/ChooseUsSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";

// all data
import processData from "@/constant/CreativeAgency/process";
import chooseUsData from "@/constant/CreativeAgency/common/choose-us";
import serviceData from "@/constant/@inteliio/service";

export const metadata: Metadata = {
  title: "Services || Averto - Creative Digital Agency NextJS Template",
  description: "Showcase your agency’s wide range of services with the Averto Services template. Designed to present offerings clearly and attractively, optimized for performance and SEO in Next.js.",
  keywords: [
    "Averto services page",
    "NextJS services template",
    "agency services overview",
    "service offerings",
    "responsive services layout",
    "SEO optimized services page",
    "digital agency services",
    "startup services showcase",
    "professional service presentation",
    "service features",
    "business services template",
    "modern services page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Services Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb title="SERVICES" pageName="SERVICES" />
        <ServiceSection data={serviceData} />
        <ProcessSection data={processData} />
        <ChooseUsSection data={chooseUsData} chooseUSTwo={true} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
