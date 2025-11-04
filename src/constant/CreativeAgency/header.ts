export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

export interface HeaderData {
  logo: string;
  menu: MenuItem[];
  offcanvasIcon: string;
}

const header: HeaderData = {
  logo: "/assets/inteliio/logo/inteliio-logo.svg",
  menu: [
    { label: "Home", href: "/creative-agency" },
    { label: "Services", href: "/creative-agency/services" },
    { label: "Our Work", href: "/creative-agency/portfolio-grid" },
    {
      label: "Company",
      children: [
        { label: "About Us", href: "/creative-agency/about" },
        { label: "FAQ", href: "/creative-agency/faq" },
        { label: "Contact", href: "/creative-agency/contact" },
      ],
    },
  ],
  offcanvasIcon: "/assets/imgs/icon/icon-4.webp",
};

export default header;
