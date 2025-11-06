export interface HeroData {
  title: string;
  highlightedText: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
  shapes: {
    shape1: string;
    shape16: string;
    shape17: string;
  };
  mainImage: string;
}

const hero: HeroData = {
  title: "Unlock the Future of",
  highlightedText: "Software",
  subtitle: "- Start with inteliio.",
  description: "We turn your ideas into digital products. Focused on clarity, performance, and simplicity. Let’s bring your vision to life.",
  cta: {
    text: "Let’s Connect",
    href: "/contact",
  },
  shapes: {
    shape1: "/assets/imgs/shape/shape-18.webp",
    shape16: "/assets/imgs/shape/shape-16.webp",
    shape17: "/assets/imgs/shape/shape-17.webp",
  },
  mainImage: "/assets/inteliio/images/inteliio-background.jpg",
};

export default hero;
