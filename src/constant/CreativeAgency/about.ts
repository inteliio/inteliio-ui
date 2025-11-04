interface CounterItem {
  number: number;
  suffix: string;
  text: string;
}
export interface AboutData {
  subtitle: string;
  title: string;
  buttonLink: string;
  buttonText: string;
  counters: CounterItem[];
}

const about: AboutData = {
  subtitle: "",
  title: "Inteliio is where smart engineering meets vision.",
  buttonLink: "/creative-agency/about",
  buttonText: "About Us",
  counters: [
    { number: 5, suffix: "+", text: "Industries empowered" },
    { number: 10, suffix: "+", text: "Brands we’ve supported" },
  ],
};

export default about;
