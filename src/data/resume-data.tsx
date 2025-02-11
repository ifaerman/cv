import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ivan Faerman",
  initials: "IF",
  location: "New York, US",
  locationLink: "https://www.google.com/maps/place/New_York",
  about:
    "MBA / Creative & Marketing Program Management, Strategy & Operations, Universidad de San Andrés / Kellogg School of Management",
  summary:
    "Experienced executive with a comprehensive background in strategy, production, and operations within the creative services, digital studios and ad agencies industry. My career spans various leadership roles, where I've consistently championed creativity, and driven efficiency, innovation, and profitability.",
  avatarUrl: "/Ivan_Faerman.jpg",
  personalWebsiteUrl: "https://ifaerman.com",
  contact: {
    email: "ivan.faerman@gmail.com",
    tel: "+",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ifaerman/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ifaerman",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Northwestern University, Kellog School of Management",
      degree: "MBA, Foreign Exchange Program",
      start: "2018",
      end: "2018",
    },
    {
      school: "University of San Andrés (Argentina)",
      degree: "Masters in Business Administration",
      start: "2017",
      end: "2019",
    },
    {
      school: "University of Belgrano (Argentina)",
      degree: "BA Film & TV Production",
      start: "2008",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Stink Studios",
      link: "https://www.stinkstudios.com/", // UPDATE
      badges: [],
      title: "Head of Production & Operations",
      logo: ParabolLogo, // UPDATE
      start: "2023", 
      end: "Present",
      description:
        "Responsible for the entire production pipeline of the studio, ensuring efficient and timely delivery of projects. Partner with the Managing Director, Finance, and Production functions to review monthly financial performance, utilization, project performance, and budget planning/modeling, and frequently advise on how to revise and optimize for profitability. Partner with the Managing Director on Stink Studios' strategic direction and long-term business objectives.", 
    },
    {
      company: "Stink Studios",
      link: "https://www.stinkstudios.com/",
      badges: [],
      title: "Head of Delivery",
      logo: ClevertechLogo,  // UPDATE
      start: "2020",
      end: "2022",
      description:
      "Lorem ipsum dolor sit amet", // UPDATE
    },
    {
      company: "Dift.co",
      link: "https://www.website.com/",
      badges: [],
      title: "Role",
      logo: ClevertechLogo,  // UPDATE
      start: "2020",  // UPDATE
      end: "2022", // UPDATE
      description:
      "Lorem ipsum dolor sit amet", // UPDATE
    },
    {
      company: "Filo.news",
      link: "https://www.website.com/",
      badges: [],
      title: "Role",
      logo: ClevertechLogo,  // UPDATE
      start: "2020",  // UPDATE
      end: "2022", // UPDATE
      description:
      "Lorem ipsum dolor sit amet", // UPDATE
    },
    {
      company: "R/GA",
      link: "https://www.website.com/",
      badges: [],
      title: "Role",
      logo: ClevertechLogo,  // UPDATE
      start: "2020",  // UPDATE
      end: "2022", // UPDATE
      description:
      "Lorem ipsum dolor sit amet", // UPDATE
    },
    {
      company: "Company",
      link: "https://www.website.com/",
      badges: [],
      title: "Role",
      logo: ClevertechLogo,  // UPDATE
      start: "2020",  // UPDATE
      end: "2022", // UPDATE
      description:
      "Lorem ipsum dolor sit amet", // UPDATE
    },
  ],
  skills: [
    "LoremIpsum",
    "LoremIpsum",
    "LoremIpsum",
    "LoremIpsum",
    "LoremIpsum",
    "LoremIpsum",
    "LoremIpsum",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
} as const;
