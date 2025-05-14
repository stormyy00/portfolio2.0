import { Projectprops } from "@/types";
import CitrusHack from "../../public/citrushack.png";
import cutiehack from "../../public/projects/cutiehack.png";
import rosehack from "../../public/projects/rosehack.png";
import autoauto from "../../public/projects/auto-auto.png";
import cs166 from "../../public/projects/cs166.png";
import cs178 from "../../public/projects/cs178.png";
import learnai from "../../public/projects/learnai.png";
import galpress from "../../public/projects/galpress.png";
import pad from "../../public/projects/PAD.png";
import hiss from "../../public/projects/HISS.png";
import art from "../../public/projects/art.png";
// import ais from "../../public/projects/learnai.png";
import mood from "../../public/projects/mood.png";
import hackathon from "../../public/projects/hackathon.png";
import rtools from "../../public/projects/rtools.png";
import Figma from "../../public/icons/figma.svg";
import Github from "../../public/icons/github.svg";
import link from "../../public/icons/link.svg";

export const PROJECTS: Projectprops[] = [
  {
    name: "GitHub AI Agent",
    short_desc:
      "Built an to automatically review, merge, & modify code, cutting manual review for developers",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "github-ai-agent",
    image: CitrusHack,
  },
  {
    name: "Ttickle Platform",
    short_desc:
      "AI Marketing Platform for social amplification for underrepresented communities",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "ttickle-platform",
    image: cs178,
  },
  {
    name: "Aurora",
    short_desc: "Hackthon website template that powered UCR Hackathons",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "aurora",
    image: hackathon,
  },
  {
    name: "UCR CSE AI Hub",
    short_desc: "AI Resource Hub for UCR CSE students",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "ucr-cse-ai-hub",
    image: learnai,
  },
  {
    name: "Auto Auto",
    short_desc: "Email automation platform for organizations and companies",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "auto-auto",
    image: autoauto,
  },
  {
    name: "Hackathon.js",
    short_desc: "Website template builder for hackathons",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "hackathon-js",
    image: CitrusHack,
  },
  {
    name: "GalsPress",
    short_desc: "Analytics platform for detemining the bias of a news article",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "gals-press",
    image: galpress,
  },
  {
    name: "CutieHack",
    short_desc: "Cutiehack Hackathon website",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "cutiehack",
    image: cutiehack,
  },
  {
    name: "Game Rental System",
    short_desc: "Rental plaform designed for renting games from customers",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "game-rental-system",
    image: cs166,
  },
  {
    name: "CitrusHack 2025",
    short_desc: "CitrusHack Hackathon website",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "citrushack-2025",
    image: CitrusHack,
  },
  {
    name: "RoseHack 2025",
    short_desc: "RoseHack Hackathon website",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "rosehack-2025",
    image: rosehack,
  },
  {
    name: "MoodReal",
    short_desc:
      "Mental Health platform where users can check up with their friends",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "mood-real",
    image: mood,
  },
  {
    name: "PAD",
    short_desc: "Website for Phi Alpha Selta fraternity",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "pad",
    image: pad,
  },
  {
    name: "HISS",
    short_desc: "Website for Higlanders in Statistics Society",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "hiss",
    image: hiss,
  },
  {
    name: "R'tools",
    short_desc:
      "Visualization tool for understing data structures and algorithms",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "rtools",
    image: rtools,
  },
  {
    name: "AIS",
    short_desc: "Website for Assocation of Information Systems at UCR",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "mood-real",
    image: rosehack,
  },
  {
    name: "PC Cooling System",
    short_desc:
      "PC cooling system protype that mimics PC cooling within a system",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "cooling-system",
    image: rosehack,
  },
  {
    name: "Art Factory",
    short_desc: "Website for Art Factory club at UCR",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "art-factory",
    image: art,
  },
  {
    name: "Airbnb Analysis",
    short_desc: "An analysis of the Airbnb dataset for lisitng in Los Angeles",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
    ],
    slug: "airbnb-analysis",
    image: rosehack,
  },
  {
    name: "BobaThoughts",
    short_desc: "Boba review platform for boba shops around the world",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "mood-real",
    image: rosehack,
  },
  {
    name: "Planner",
    short_desc: "Course planner site for UCR students",
    description: [
      {
        header: "About",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Flask", "Gemini Flash 2.5"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://github.com/",
        icon: Figma,
      },
    ],
    slug: "planner",
    image: rosehack,
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find(({ slug: projectSlug }) => projectSlug === slug);
