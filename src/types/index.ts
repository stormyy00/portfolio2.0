import { StaticImageData } from "next/image";

export type Projectprops = {
  name: string;
  techstack: string[];
  short_desc: string;
  authors: string[];
  description: {
    header: string;
    path: string;
    description: string | string[];
    image?: StaticImageData;
  }[];
  link: {
    name: string;
    link: string;
    icon: StaticImageData;
  }[];
  slug: string;
  image: StaticImageData;
};

export type experienceProps = {
  title: string;
  company: string;
  description: string[];
  date: string;
};
