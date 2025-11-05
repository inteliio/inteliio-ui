export interface ITextSlide {
  id: number;
  text: string;
  href: string;
  img: string;
}

export interface TextSliderData {
  slides: ITextSlide[];
}

const textSliderData: TextSliderData = {
  slides: [
    {
      id: 1,
      text: "LET’S TALK",
      href: "/contact",
      img: "/assets/imgs/shape/inteliio-color.svg",
    },
    {
      id: 2,
      text: "LET’S TALK",
      href: "/contact",
      img: "/assets/imgs/shape/inteliio-color.svg",
    },
    {
      id: 3,
      text: "LET’S TALK",
      href: "/contact",
      img: "/assets/imgs/shape/inteliio-color.svg",
    },
    {
      id: 4,
      text: "LET’S TALK",
      href: "/contact",
      img: "/assets/imgs/shape/inteliio-color.svg",
    },
    {
      id: 5,
      text: "LET’S TALK",
      href: "/contact",
      img: "/assets/imgs/shape/inteliio-color.svg",
    },
  ],
};

export default textSliderData;
