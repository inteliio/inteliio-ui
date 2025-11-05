export interface ServiceData {
  number: string;
  title: string;
  link: string;
  video: string;
}

const services: ServiceData[] = [
  {
    number: "/002",
    title: "Mobile Apps",
    link: "/service-details",
    video: "/videos/app_solutions.mp4",
  },
  {
    number: "/003",
    title: "Web Apps",
    link: "/service-details",
    video: "/videos/developments.mp4",
  },
  {
    number: "/001",
    title: "Custom Software",
    link: "/service-details",
    video: "/videos/creative_design.mp4",
  },
  {
    number: "/004",
    title: "UI-UX Solutions",
    link: "/service-details",
    video: "/videos/ui_ux_solutions.mp4",
  },
];

export default services;
