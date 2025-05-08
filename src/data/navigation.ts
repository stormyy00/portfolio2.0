import { BriefcaseBusiness, ComputerIcon, User } from "lucide-react";

export const NAVIGATION = {
  main: [
    {
      name: "Projects",
      link: "/projects",
      pathname: "projects",
    },
    {
      name: "Blogs",
      link: "/blogs",
      pathname: "blogs",
    },
    {
      name: "Photography",
      link: "/photography",
      pathname: "photography",
    },
  ],
  sub: [
    {
      name: "About",
      link: "#about",
      pathname: "about",
      icon: User,
    },
    {
      name: "Experience",
      link: "#experience",
      pathname: "experience",
      icon: BriefcaseBusiness,
    },
    {
      name: "Projects",
      link: "#projects",
      pathname: "projects",
      icon: ComputerIcon,
    },
  ],
};
