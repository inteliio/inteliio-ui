export interface ProcessData {
  number: string;
  title: string;
  text: string;
}

const process: ProcessData[] = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "We begin with a meeting to understand your vision, objectives, and requirements, defining clear goals for the project.",
  },
  {
    number: "02",
    title: "Discovery & Strategy",
    text: "Through research and planning, we outline the project scope, target audience, and technical roadmap aligned with your business goals.",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "Our design and engineering teams collaborate to turn concepts into functional, high-quality digital solutions.",
  },
  {
    number: "04",
    title: "Testing & Review",
    text: "Before launch, we perform in-depth testing, collect your feedback, and refine the product to ensure quality and reliability.",
  },
  {
    number: "05",
    title: "Launch & Optimization",
    text: "We deploy your product securely, monitor performance, and optimize it based on analytics and user behavior.",
  },
  {
    number: "06",
    title: "Support & Growth",
    text: "After launch, we provide maintenance, updates, and consultation to help you scale and evolve your digital presence.",
  },
];

export default process;
