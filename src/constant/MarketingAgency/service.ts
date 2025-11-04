export interface IServiceTab {
  id: string;
  title: string;
  number: string;
  icon: string;
  desc: string;
  features: string[];
}

export interface ISlider {
  id: number;
  text: string;
  link: string;
}

export interface ServiceData {
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  navTabs: IServiceTab[];
  sliderItems: ISlider[];
}

const serviceData: ServiceData = {
  subtitle: "Our Unique Services",
  buttonText: "Our Services",
  buttonLink: "/marketing-agency/services",
  navTabs: [
    {
      id: "home",
      title: "Responsive Design",
      number: "/01",
      icon: "/assets/imgs/icon/icon-10.webp",
      desc: "We ensure every product delivers a seamless experience across all devices and screen sizes from mobile to desktop.",
      features: ["Cross-device layout optimization", "Adaptive media and typography", "Consistent UI across platforms", "Responsive image optimization", "Testing across browsers and devices", "Dynamic scaling for high-DPI screens"],
    },
    {
      id: "seo",
      title: "SEO Optimization",
      number: "/02",
      icon: "/assets/imgs/icon/icon-30.webp",
      desc: "Every project is delivered with on-page SEO fundamentals to improve visibility, speed, and discoverability across search engines.",
      features: [
        "Optimized meta titles and descriptions",
        "Semantic HTML and structured headings",
        "URL architecture and sitemap generation",
        "Image optimization and alt text strategy",
        "Page speed and Core Web Vitals",
        "Schema markup implementation",
        "Search Console and analytics setup",
        "Content readability and alignment",
      ],
    },
    {
      id: "design",
      title: "Brand-Aligned Design",
      number: "/03",
      icon: "/assets/imgs/icon/icon-29.webp",
      desc: "We design digital experiences that visually express your brand identity consistent, modern, and built to connect with your audience.",
      features: ["Custom visual direction and style guide", "Color palette and typography alignment", "Consistent branding across all pages", "Design systems for scalable growth"],
    },
    {
      id: "payments",
      title: "Digital Payments",
      number: "/04",
      icon: "/assets/imgs/icon/icon-29.webp",
      desc: "We integrate secure, reliable payment solutions that allow your business to accept transactions smoothly across multiple platforms.",
      features: ["Integration with Stripe, PayPal, and regional gateways", "One-time and recurring payment support", "Secure checkout and encryption standards", "Transaction tracking and automated invoicing"],
    },
    {
      id: "hosting",
      title: "Hosting & Deployment",
      number: "/06",
      icon: "/assets/imgs/icon/icon-32.webp",
      desc: "We handle secure, reliable, and high-performance hosting setups to ensure your website stays fast, stable, and always online.",
      features: ["Cloud hosting setup", "Domain configuration and SSL setup", "Automated backups and uptime monitoring", "Version control (CI/CD)", "Performance and load testing before launch"],
    },
    {
      id: "analytics",
      title: "Analytics & Tracking",
      number: "/05",
      icon: "/assets/imgs/icon/icon-31.webp",
      desc: "We integrate advanced analytics tools to help you understand user behavior, traffic sources, and business performance in real time.",
      features: ["Google Analytics and Tag Manager setup", "Event and conversion tracking", "Traffic and engagement reporting", "Custom dashboards and KPI monitoring"],
    },
  ],
  sliderItems: [
    {
      id: 1,
      text: "GET OUR SERVICES",
      link: "/marketing-agency/contact",
    },
    {
      id: 2,
      text: "EXPERIENCE SUCCESS WITH US",
      link: "/marketing-agency/contact",
    },
    {
      id: 3,
      text: "BOOST YOUR BRAND WITH US",
      link: "/marketing-agency/contact",
    },
    {
      id: 4,
      text: "LET'S GROW TOGETHER",
      link: "/marketing-agency/contact",
    },
  ],
};

export default serviceData;
