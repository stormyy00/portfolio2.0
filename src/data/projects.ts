import { Projectprops } from "@/types";
import CitrusHack from "@/public/citrushack.png";
import cutiehack from "@/public/projects/cutiehack.png";
import rosehack from "@/public/projects/rosehack.png";
import autoauto from "@/public/projects/auto-auto.png";
import cs166 from "@/public/projects/cs166.png";
import cs178 from "@/public/projects/cs178.png";
import learnai from "@/public/projects/learnai.png";
import galpress from "@/public/projects/galpress.png";
import pad from "@/public/projects/PAD.png";
import hiss from "@/public/projects/HISS.png";
import art from "@/public/projects/art.png";
import hold from "@/public/projects/hold.png";
import holddahboard from "@/public/projects/hold-dashboard.png";
import mood from "@/public/projects/mood.png";
import hackathon from "@/public/projects/hackathon.png";
import rtools from "@/public/projects/rtools.png";
import Figma from "@/public/icons/figma.svg";
import Github from "@/public/icons/github.svg";
import link from "@/public/icons/link.svg";
import qlip from "@/public/projects/qlip.png";
import url from "@/public/projects/url.png";
import urlshortener from "@/public/projects/url-dashboard.png";

export const PROJECTS: Projectprops[] = [
  {
    name: "Qlip 60",
    short_desc:
      "An AI-driven content generation platform for short-form educational videos",
    authors: ["Jonathan Trujillo"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          "This is a project built with Next.js (TypeScript) on the frontend and Flask on the backend, using Neon as the database. I integrated Gemini 2.5 to power a multi-stage, AI-driven content generation workflow. The goal was to produce short-form educational videos tailored for Gen Z audiences with shorter attention spans, drawing inspiration from the Reddit story + Subway Surfers-style TikTok format. Qlip reimagines viral storytelling trends into engaging, bite-sized learning experiences.",
      },
      // {
      //   header: "Why",
      //   path: "why",
      //   description: [
      //     "I built this app for personal use because I often used Discord as a dumping ground for links, and over time, it became difficult to search for older resources.",
      //     "Hold solves this by providing a dedicated, lightweight space where I can quickly save links, group them into folders, and track views over time. It offers a simple, fast, and organized way to manage saved links, whether they're articles I want to read later, tools I want to revisit, or resources I frequently reference.",
      //   ],
      //   image: holddahboard,
      //   // image: CitrusHack,
      // },
    ],
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Neon (PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "React Query",
      "AWS S3",
      "AWS Cloudfront",
      "Flask",
      "ElevenLabs",
      "Gemini 2.5 Pro",
    ],
    link: [
      {
        name: "Github",
        link: "https://github.com/quick-60",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://qlip-tau.vercel.app",
        icon: link,
      },
    ],
    slug: "qlip",
    image: qlip,
  },
  {
    name: "Hold",
    short_desc:
      "A personal link manager to save, organize, and track links for later use",
    authors: ["Jonathan Trujillo"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          "This project was designed to refine my skills in database management systems, specifically using PostgreSQL, while building a full-stack web application with Next.js and Tailwind CSS. The goal was to create a personal link manager that allows users to save, organize, and track links for later use. I also used this project as a way to experiment with writing optimized SQL queries and explore scalable database design patterns that could support growth beyond a simple MVP",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "I built this app for personal use because I often used Discord as a dumping ground for links, and over time, it became difficult to search for older resources.",
          "Hold solves this by providing a dedicated, lightweight space where I can quickly save links, group them into folders, and track views over time. It offers a simple, fast, and organized way to manage saved links, whether they're articles I want to read later, tools I want to revisit, or resources I frequently reference.",
        ],
        image: holddahboard,
        // image: CitrusHack,
      },
    ],
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Neon (PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "React Query",
    ],
    link: [
      {
        name: "Github",
        link: "https://github.com/stormyy00/hold",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://hold-pi.vercel.app",
        icon: link,
      },
    ],
    slug: "hold",
    image: hold,
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
        path: "about",
        description:
          " AI-powered marketing platform from the ground up, a low-cost solution leveraging affordable LLMs. It served as a lightweight CRM for nonprofits and underrepresented groups, automating outreach, streamlining workflows, and significantly reducing manual effort. We developed it with React/Next.js, Typescript, Tailwind, shadcn, Redis, Firebase, React Query, and Google Gemini 2.5 Pro.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "A major issue with today’s advancing technologies is that they mostly benefit consumer products or companies with big budgets and dedicated teams. But we wanted to build for the underdogs: nonprofits that often lack the time, staff, or resources to run full-scale marketing operations. These organizations are usually run by just a few passionate people serving their communities without expecting profit.",
          "it made advanced tools accessible to organizations that usually can’t afford consumer-focused CRM platforms. Nonprofits often struggle to balance day-to-day operations with the demands of outreach, and this tool helped bridge that gap in a meaningful, cost-effective way.",
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
        link: "https://github.com/seanquiambao/TTickle-Automation",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://blue-heart-automation.vercel.app/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/design/d6akvc0ygwyNQvTiE8CaNM/TTicklesPlatform?node-id=0-1&t=fZVzSu8HwkEphyAN-1",
        icon: Figma,
      },
    ],
    slug: "ttickle-platform",
    image: cs178,
  },
  {
    name: "GitHub AI Agent",
    short_desc:
      "Built an to automatically review, merge, & modify code, cutting manual review for developers",
    authors: ["Jonathan Trujillo"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          "This project was created to explore building a self-sufficient AI agent capable of acting like a software engineer. Inspired by Jerry Li, who led efforts in developing a SWE AI agent, I decided to prototype a smaller-scale version by automating GitHub pull requests and integrating the agent into existing CI/CD pipelines.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "As software teams grow and engineering workflows become more complex, automating repetitive tasks like code reviews, PR checks, and formatting can significantly increase developer productivity and reduce bottlenecks.",
          "This project addresses the need for intelligent automation in modern development pipelines. By integrating an AI agent into GitHub and CI/CD workflows, I aimed to demonstrate how such agents can accelerate code review processes, enforce consistent coding standards, and reduce manual overhead",
        ],
        image: CitrusHack,
      },
      {
        header: "How it works",
        path: "how",
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
        link: "https://github.com/stormyy00/github-pr-automation",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://github.com/",
        icon: link,
      },
    ],
    slug: "github-ai-agent",
    image: CitrusHack,
  },
  {
    name: "Aurora",
    short_desc: "Hackthon website template that powered UCR Hackathons",
    authors: ["Jonathan Trujillo", "ACM Hackathon Team"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          "Hackathon Website is a suite of tools provided to hackathon organizers, participants, and supporting members to reduce the amount of work required. It has been battle tested through 5 hackathons during the 2023 - 2024 school year and performed exceptionally well. Scalability issues were addressed immediately in time for the next hackathon and worked exceptionally well. Security issues were resolved before the initial deployments and no security breaches occurred during the 5 hackathons.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "The unison in hackathon website is unlike any school has seen, allowing UCR hackathons to excel years in their technological development. The hackathon website system is competitive with the same systems that UCLA, Stanford, and Berkeley use for their 700+, 1500+, and 800+ participant hackathons respectively. In some cases it exceeds their systems capabilities. Many Ivy League schools do not have systems comparable to UCR due to the advancements in the hackathon website. ",
          "Without the system today, many of the newer hackathons, primarily Bearhack and DesignVerse, would have to spend several years before they build such a system independently. Cutiehack, Rosehack, and Citrushack, the more mature hackathons in regards to age would still have to spend a few more years before they could catch up in terms of hackathon website development.",
        ],
        image: CitrusHack,
      },
      {
        header: "My contributions",
        path: "contributions",
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
        link: "https://github.com/acm-ucr/aurora",
        icon: Github,
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
        path: "path",
        description:
          "The UCR CSE AI Hub is a centralized resource designed to help UCR students explore Artificial Intelligence. It provides access to AI-related courses, research labs, and answers to frequently asked questions. The initiative began in November 2024, when Professor Yue Dong approached us with the department's interest in building a platform to support AI exploration. Since then, we’ve worked closely with Professor Dong and our UI/UX team to create a design tailored for student usability. Development began in January 2025 with our engineering team, and by May 2025, after multiple rounds of feedback with Professor Dong and Professor Christian Shelton (Chair of CSE), we finalized and launched the platform.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/acm-ucr/CSE-AI-resources",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://learnai.cs.ucr.edu",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/design/qdagE2pkGk4J7vyuHdVHcx/CSE-AI-WEBSITE?node-id=0-1&p=f&t=D1zYyVOe02EqIt82-0",
        icon: Figma,
      },
    ],
    slug: "ucr-cse-ai-hub",
    image: learnai,
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
        path: "about",
        description:
          "With this being my first hackathon win, the idea behind this project is simple: you copy the article or excerpt you want to check for bias and sentiment, then easily observe the app’s results by scrolling down.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "To fit with the theme of Roshack and its tracks, we wanted to explore how athletes and celebrities are asked very different questions. Female athletes are often asked more about their clothes and fashion choices, while men are typically asked about their skills. This made us think about the ways women are still discriminated against today. Although the issue started with visual and audio media, as we dug deeper, we found the written medium to be even more interesting.",
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
        link: "https://github.com/rfairooz/GalsPress",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://gal-press-test2.vercel.app",
        icon: link,
      },
    ],
    slug: "gals-press",
    image: galpress,
  },
  {
    name: "URL Shortener",
    short_desc: "URL shortener utilizing Go & Next.js with JWT authorization",
    authors: ["Jonathan Trujillo"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "Hackathon.js is a hackathon platform that allows users to create and manage hackathons. It provides features such as team management, project submission, and judging.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        image: urlshortener,
      },
    ],
    techstack: [
      "Go",
      "Sqlite",
      "Next.js",
      "Tailwind CSS",
      "shadcn",
      "Better Auth",
      "React Query",
    ],
    link: [
      {
        name: "Github",
        link: "https://github.com/stormyy00/ac-shorter",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://ac-shorter.vercel.app/",
        icon: link,
      },
    ],
    slug: "url-shortener",
    image: url,
  },
  {
    name: "Game Rental System",
    short_desc: "Rental plaform designed for renting games from customers",
    authors: ["Jonathan Trujillo", "Lester Lien"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          "This project was built for my Database Management Systems (CS166) class, where I designed a game rental system that allows users to rent games. The goal was to deepen my understanding of databases using SQL queries and go beyond the main assignment, which was a Java terminal application, by also creating a frontend with Next.js and Tailwind CSS.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "I wanted to challenge myself by extending the project requirements and applying what I learned to a real-world use case. By creating a web frontend, I could explore the full stack—connecting the database to a modern interface and making the application more user-friendly. This project helped me bridge the gap between backend database management and frontend development, giving me practical experience in both areas.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: ["Next.js", "Tailwind CSS", "Java", "PostgreSQL", "Redux"],
    link: [
      {
        name: "Github",
        link: "https://github.com/stormyy00/cs166",
        icon: Github,
      },
      {
        name: "Github",
        link: "https://github.com/stormyy00/cs166-frontend",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://cs166-frontend.vercel.app",
        icon: link,
      },
    ],
    slug: "game-rental-system",
    image: cs166,
  },
  {
    name: "CutieHack",
    short_desc: "Cutiehack Hackathon website",
    authors: ["Jonathan Trujillo", "Taaha Sayed", "Amir Shanti", "Brandon Sun"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/cutiehack-ucr/cutie-hack-2024",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://cutiehack.com",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/design/AQJtvVtBpkMsmkwsNGujRs/UI-UX-Design",
        icon: Figma,
      },
    ],
    slug: "cutiehack",
    image: cutiehack,
  },
  {
    name: "Auto Auto",
    short_desc: "Email automation platform for organizations and companies",
    authors: ["Jonathan Trujillo", "Taaha Sayed"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          "Auto Auto was created overnight in my bedroom with Taaha Sayed, a fellow enthusiast. Our goal was to build a platform that simplifies and automates repetitive email tasks while providing visibility and organization-level insights — perfect for clubs, hackathons, and growing teams.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "When I stepped up as Director of CitrusHack, I quickly noticed how outdated and inefficient our outreach process was. We relied on spreadsheets of names and emails combined with a static email template to contact judges, chaperones, catering teams, and sponsors. The process was tedious and error-prone, making it clear that a better solution was needed.",
          "To streamline this, I built a simple email automation tool that allowed users to configure a subject line and body template, then import a list of recipients by name and email. Taaha and I expanded this concept into a full-fledged platform featuring user authentication, organizational and group support, and a shared email activity log for better collaboration and transparency.",
        ],
        image: CitrusHack,
      },
      {
        header: "Features",
        path: "features",
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
        link: "https://github.com/stormyy00/email-automation",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://autoauto.vercel.app",
        icon: link,
      },
    ],
    slug: "auto-auto",
    image: autoauto,
  },
  {
    name: "Nuvio",
    short_desc: "Website cloning builder",
    authors: ["Jonathan Trujillo"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          "This was originally a coding assgment for Orchid YCW25, where I had to build a website cloning builder that allows users to clone websites and edit them. The goal was to create a platform that allows users to easily create and manage websites without having to write any code.",
      },
      {
        header: "Why",
        path: "why",
        description: [
          "I decided to take on this challenge in being able to refine my prompt eneginneering scills and understanding for to build AI workflows in order to create a 1-1 website replica.",
          "With the help of Gemini Flash 2.5, I was able to create a platform that allows users to easily create and manage websites without having to write any code. The platform is designed to be user-friendly and intuitive, allowing users to focus on creating content rather than worrying about the technical details.",
        ],
        image: CitrusHack,
      },
    ],
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "Neon (PostgreSQL",
      "Gemini Flash 2.5",
    ],
    link: [
      {
        name: "Github",
        link: "https://github.com/stormyy00/nuvio",
        icon: Github,
      },
    ],
    slug: "nuvio",
    image: CitrusHack,
  },
  {
    name: "CitrusHack 2025",
    short_desc: "CitrusHack Hackathon website",
    authors: ["Jonathan Trujillo", "Taaha Sayed", "Amir Shanti", "Brandon Sun"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/citrushack2025",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://www.citrushack.com",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/design/cWlwDqsYNHsI4Ew96zGBdO/Citrus-Hack--Website-Design--2024-25-",
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/rosehack-2025",
        icon: Github,
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/HackTech2024",
        icon: Github,
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/acm-ucr/pad-website",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://pad.ucrhighlanders.org",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/design/6FTXStJnmz3ltBSM1OtgAE/Phi-Alpha-Delta-Pre-Law-Fraternity",
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/acm-ucr/hiss-website",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://hiss.ucrhighlanders.org",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/file/Rk8S9muvP1HL4PkVHU25gj/HISS?type=design&node-id=0-1&mode=design&t=BQDMzYmOcO0oUDKh-0",
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/acm-ucr/r-tools",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://rtools.ucrhighlanders.org",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/file/srPYl8FCyMLXr4fMQic28X/R'Tools?type=design&node-id=0%3A1&mode=design&t=UcB5WmSDilkrVkbF-1",
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/acm-ucr/ais-website",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://ais.ucrhighlanders.org/",
        icon: link,
      },
      {
        name: "Figma",
        link: "https://www.figma.com/design/Bhz6C7rBlK55l0ycqDLi1Z/AIS-website?node-id=0-1&t=zm25Ga7vGzINJxfc-0",
        icon: Figma,
      },
    ],
    slug: "ais",
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/PC-Cooling-System",
        icon: Github,
      },
    ],
    slug: "cooling-system",
    image: rosehack,
  },
  {
    name: "HTTP Web Server",
    short_desc: "An HTTP web server built using C that serves static files",
    authors: ["Jonathan Trujillo"],
    description: [
      {
        header: "About",
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/http-server",
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/acm-ucr/art-factory-website",
        icon: Github,
      },
      {
        name: "Website",
        link: "https://artfactory.ucrhighlanders.org",
        icon: link,
      },
      {
        name: "Figma",
        link: "figma.com/file/29dhv08rdERrP0fE02gktk/art-factory-website?type=design&node-id=0-1&mode=design&t=6nDsu19vLc6AP9tf-0",
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/airbnb-analysis",
        icon: Github,
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/BobaThoughts",
        icon: Github,
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
        path: "about",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua.",
      },
      {
        header: "Why",
        path: "why",
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
        link: "https://github.com/stormyy00/planner",
        icon: Github,
      },
    ],
    slug: "planner",
    image: rosehack,
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find(({ slug: projectSlug }) => projectSlug === slug);
