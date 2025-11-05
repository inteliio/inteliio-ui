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
  offcanvasIcon: "/assets/imgs/icon/icon-4.webp",
};

export default header;
