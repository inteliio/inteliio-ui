export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
}

const sidebar: SidebarData = {
  logo: "/assets/inteliio/logo/inteliio-logo.svg",
  menus: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/portfolio" },
    {
      label: "Company",
      children: [
        { label: "About Us", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  closeIcon: "fas fa-times",
  title: "Hello There!",
  description: "We offer comprehensive range of services to help your business thrive.",
  cta: {
    text: "Let’s Connect",
    href: "/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [],
  contact: {
    phone: { text: "+389 78 298 116", href: "tel:+38978298116" },
    email: { text: "contact@inteliio.com", href: "mailto:contact@inteliio.com" },
    address: "Macedonia, Skopje",
  },
  social: [
    { label: "IG", href: "https://www.instagram.com/inteliio/" },
    { label: "FB", href: "#" },
    { label: "IN", href: "#" },
  ],
};

export default sidebar;
