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
    authors: ["Jonathan Trujillo"],
    description: [
      {
        header: "About",
        description:
          "This project was created to explore building a self-sufficient AI agent capable of acting like a software engineer. Inspired by Jerry Li, who led efforts in developing a SWE AI agent, I decided to prototype a smaller-scale version by automating GitHub pull requests and integrating the agent into existing CI/CD pipelines.",
      },
      {
        header: "Why",
        description: [
          "As software teams grow and engineering workflows become more complex, automating repetitive tasks like code reviews, PR checks, and formatting can significantly increase developer productivity and reduce bottlenecks.",
          "This project addresses the need for intelligent automation in modern development pipelines. By integrating an AI agent into GitHub and CI/CD workflows, I aimed to demonstrate how such agents can accelerate code review processes, enforce consistent coding standards, and reduce manual overhead",
        ],
        image: CitrusHack,
      },
      {
        header: "How it works",
        description: [
          "The system includes a REST API integrated with the GitHub API, configured to listen for pull request events on specified repositories. When a pull request is opened, the AI agent automatically reviews the changes, generates a summary of what the PR entails, and sends a notification to either Slack or Discord based on the user's preferred platform.",
          " After notifying the user, the agent attempts to intelligently validate the changes and, if all checks pass, proceeds to merge the PR into the `dev` branch: streamlining the review and deployment pipeline.",
        ],
        // image: CitrusHack,
      },
    ],
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Flask",
      "Gemini Flash 2.5",
      "Supabase",
      "Redis",
    ],
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
    authors: [
      "Jonathan Trujillo",
      "Taaha Sayed",
      "Kavin Phabiani",
      "Sean Quanibabo",
    ],
    description: [
      {
        header: "About",
        description:
          "A major issue with today’s advancing technologies is that they mostly benefit consumer products or companies with big budgets and dedicated teams. But we wanted to build for the underdogs: nonprofits that often lack the time, staff, or resources to run full-scale marketing operations. These organizations are usually run by just a few passionate people serving their communities without expecting profit.",
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
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Next Auth",
      "Firebase",
      "PostHog",
      "Redis",
      "Express",
      "Gemini Flash 2.5",
    ],
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
    authors: ["Jonathan Trujillo", "ACM Hackathon Team"],
    description: [
      {
        header: "About",
        description:
          "Hackathon Website is a suite of tools provided to hackathon organizers, participants, and supporting members to reduce the amount of work required. It has been battle tested through 5 hackathons during the 2023 - 2024 school year and performed exceptionally well. Scalability issues were addressed immediately in time for the next hackathon and worked exceptionally well. Security issues were resolved before the initial deployments and no security breaches occurred during the 5 hackathons.",
      },
      {
        header: "Why",
        description: [
          "The unison in hackathon website is unlike any school has seen, allowing UCR hackathons to excel years in their technological development. The hackathon website system is competitive with the same systems that UCLA, Stanford, and Berkeley use for their 700+, 1500+, and 800+ participant hackathons respectively. In some cases it exceeds their systems capabilities. Many Ivy League schools do not have systems comparable to UCR due to the advancements in the hackathon website. ",
          "Without the system today, many of the newer hackathons, primarily Bearhack and DesignVerse, would have to spend several years before they build such a system independently. Cutiehack, Rosehack, and Citrushack, the more mature hackathons in regards to age would still have to spend a few more years before they could catch up in terms of hackathon website development.",
        ],
        image: CitrusHack,
      },
      {
        header: "My contributions",
        description: [
          "Hackathon-website, also known as Aurora, holds a special place in my journey—it was filled with many firsts. It was the first time I rediscovered my passion for building, the first time I worked closely with a team, and the first time I found a group of like-minded people I had been searching for during my first two years of college. It also marked my first real exposure to full-stack web development.",
          "This project was instrumental in shaping my growth as a developer. I went from fixing small bugs to working on databases, building static pages, creating a real-time judging interface, and optimizing API routes. Aurora pushed me to constantly learn and improve, ultimately helping me become the developer I am today.",
        ],
      },
    ],

    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Next Auth",
      "Cypress.io",
    ],
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
    authors: [
      "Jonathan Trujillo",
      "Jerry Li,",
      "Yue Dong",
      "Christian Shelton",
    ],
    description: [
      {
        header: "About",
        description:
          "The UCR CSE AI Hub is a centralized resource designed to help UCR students explore Artificial Intelligence. It provides access to AI-related courses, research labs, and answers to frequently asked questions. The initiative began in November 2024, when Professor Yue Dong approached us with the department's interest in building a platform to support AI exploration. Since then, we’ve worked closely with Professor Dong and our UI/UX team to create a design tailored for student usability. Development began in January 2025 with our engineering team, and by May 2025, after multiple rounds of feedback with Professor Dong and Professor Christian Shelton (Chair of CSE), we finalized and launched the platform.",
      },
      {
        header: "Why",
        description: [
          "The CSE Department recognized a lack of accessible, centralized AI resources for students in our department. The AI Hub addresses this by gathering key opportunities, tools, and information in one place.",
          "The site includes a curated list of AI courses offered at UCR, lab details with faculty contacts, beginner guides for getting started with AI/ML, and answers to common questions. It also highlights student and faculty-led research and initiatives.",
          "Ultimately, our goal is to foster a stronger ecosystem for AI education, engagement, and innovation within the UCR Computer Science & Engineering community.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Shacn", "Prettier"],
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
    authors: ["Jonathan Trujillo", "Taaha Sayed"],
    description: [
      {
        header: "About",
        description:
          "Auto Auto was created overnight in my bedroom with Taaha Sayed, a fellow enthusiast. Our goal was to build a platform that simplifies and automates repetitive email tasks while providing visibility and organization-level insights — perfect for clubs, hackathons, and growing teams.",
      },
      {
        header: "Why",
        description: [
          "When I stepped up as Director of CitrusHack, I quickly noticed how outdated and inefficient our outreach process was. We relied on spreadsheets of names and emails combined with a static email template to contact judges, chaperones, catering teams, and sponsors. The process was tedious and error-prone, making it clear that a better solution was needed.",
          "To streamline this, I built a simple email automation tool that allowed users to configure a subject line and body template, then import a list of recipients by name and email. Taaha and I expanded this concept into a full-fledged platform featuring user authentication, organizational and group support, and a shared email activity log for better collaboration and transparency.",
        ],
        image: CitrusHack,
      },
      {
        header: "Features",
        description: [
          "Manual outreach is time-consuming and inefficient — especially for events and organizations managing hundreds of contacts. Auto Auto was designed to eliminate that overhead.",
          "Users can create personalized email campaigns in minutes, manage shared templates across their organization, and track sent history to ensure accountability and coordination across teams.",
        ],
      },
    ],
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Redis",
      "Nodemailer",
      "Express",
    ],
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
    authors: ["Jonathan Trujillo", "Taaha Sayed"],
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
    authors: [
      "Jonathan Trujillo",
      "Raidah Fairooz",
      "Aarron Tam",
      "Dennis Susanto",
    ],
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
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Hugging Face",
      "Flask",
      "Vader Sentiment",
    ],
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
    authors: ["Jonathan Trujillo", "Taaha Sayed", "Amir Shanti", "Brandon Sun"],
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
    authors: ["Jonathan Trujillo", "Lester Lien"],
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
    techstack: ["Next.js", "Tailwind CSS", "Java", "PostgreSQL"],
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
    authors: ["Jonathan Trujillo", "Taaha Sayed", "Amir Shanti", "Brandon Sun"],
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
    authors: ["Jonathan Trujillo", "Sachin Chopra"],
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
    authors: ["Jonathan Trujillo"],
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
    techstack: ["React Native", "Tailwind CSS", "Firebase", "Flask", "OpenAI"],
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
    authors: ["Jonathan Trujillo"],
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
    authors: ["Jonathan Trujillo"],
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
    authors: ["Jonathan Trujillo"],
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
    authors: ["Jonathan Trujillo"],
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
    authors: ["Jonathan Trujillo"],
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
    techstack: ["C++", "Arduino"],
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
    name: "HTTP Web Server",
    short_desc:
      "PC cooling system protype that mimics PC cooling within a system",
    authors: ["Jonathan Trujillo"],
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
    techstack: ["C"],
    link: [
      {
        name: "Github",
        link: "https://github.com/",
        icon: Github,
      },
    ],
    slug: "http-web-server",
    image: rosehack,
  },
  {
    name: "Art Factory",
    short_desc: "Website for Art Factory club at UCR",
    authors: ["Jonathan Trujillo"],
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
    authors: ["Jonathan Trujillo"],
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
    techstack: ["Next.js", "Jupyter Notebook", "Flask", "XLG Boost"],
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
    authors: ["Jonathan Trujillo"],
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
    authors: ["Jonathan Trujillo"],
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
    techstack: ["Next.js", "Tailwind CSS", "Drizzle ORM", "PostgreSQL"],
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
