import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";
import codeclause from "../assets/codeclause.webp";
import leetcode from "../assets/leetcode.png";
import internpro1 from "../assets/internpro1.webp";
import internpro2 from "../assets/internpro2.webp";
import resume from "../assets/Akash_Resume.pdf";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiPostman,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

export const LINKS = [
  { href: "#work", label: "Project" },
  { href: "#about", label: "About" },
  { href: "#techStacks", label: "Tech Stack" },
  { href: "#education", label: "Education" },
  { href: "#internship", label: "Internship" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = [
  { name: "HTML", icon: FaHtml5, category: "Frontend", level: "Intermediate", progress: 80 },
  { name: "CSS", icon: FaCss3Alt, category: "Frontend", level: "Intermediate", progress: 80 },
  { name: "JavaScript", icon: FaJs, category: "Frontend", level: "Intermediate", progress: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", level: "Intermediate", progress: 75 },
  { name: "React JS", icon: FaReact, category: "Frontend", level: "Advanced", progress: 90, core: true },
  { name: "Express JS", icon: SiExpress, category: "Backend", level: "Beginner", progress: 75 },
  { name: "Firebase", icon: SiFirebase, category: "Backend", level: "Intermediate", progress: 70 },
  { name: "MongoDB", icon: SiMongodb, category: "Backend", level: "Intermediate", progress: 78 },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend", level: "Beginner", progress: 60 },
  { name: "Redux", icon: SiRedux, category: "Frontend", level: "Intermediate", progress: 70 },
  { name: "Github", icon: FaGithub, category: "Tools", level: "Intermediate", progress: 85 },
  { name: "Postman", icon: SiPostman, category: "Tools", level: "Intermediate", progress: 80 },
  { name: "VS Code", icon: VscVscode, category: "Tools", level: "Intermediate", progress: 90 },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Akash Paul, a creative Full-stack developer, crafting immersive and intuitive web experiences.",
  description:
    "Currently, I am seeking an exciting opportunity where I can contribute my skills, grow professionally, and collaborate with like-minded individuals to build impactful technology.",
  resumeLinkText: "Download Resume",
  resumeLink: resume,
};

export const PROJECTS = [
  {
    name: "BookVerse",
    type: "Frontend",
    description: "BookVerse is a responsive, frontend-only book club platform built with Firebase. It enables users to authenticate, suggest books, join threaded discussions, track reading progress, and schedule meetings. Features include rich text comments, dark mode, and real-time updates using Firestore.",
    image: projects1,
    link: "https://github.com/akash-collab/bookverse",
    deploy: "https://bookverse-beta.vercel.app/"
  },
  {
    name: "Loan Application System",
    type: "Frontend",
    description: "Loan Application System is a fully responsive, Firebase-powered React + TypeScript app that allows users to apply for loans, track approval status, view EMIs on a calendar, and make repayments. Features include a multi-step form with validation, auto-approval logic, EMI calculator, dark mode, real-time updates, and an intuitive dashboard.",
    image: projects2,
    link: "https://github.com/akash-collab/Loan-Application-System",
    deploy: "https://loan-application-system-lovat.vercel.app/"
  },
  {
    name: "MealMaster App",
    type: "Fullstack",
    description: "MealMaster is a full-featured meal planning app that helps users create personalized meal plans, track nutrition, and achieve dietary goals. Built with a modern tech stack, it offers recipe search, drag-and-drop weekly planners, calorie and macro tracking, grocery list generation, meal prep reminders, and intelligent AI-based meal suggestions—all tailored to user preferences and fitness goals.",
    image: projects3,
    link: "https://github.com/akash-collab/MealMaster",
    deploy: "https://mealmaster-frontend.onrender.com"
  },
  {
    name: "Weather App",
    type: "Frontend",
    description:
      "WeatherNow is a sleek, responsive weather app that provides real-time weather updates for any location. Built with Javascript and OpenWeatherMap API, it displays current temperature, humidity, wind speed, and weather conditions with dynamic icons and intuitive UI.",
    image: projects4,
    link: "https://github.com/akash-collab/Weather-Website",
    deploy: "https://weather-website-olive.vercel.app/"
  },
  {
    name: "Creator's Analysis Tool",
    type: "Backend",
    description: "YouTube Sentiment Analysis is a modern web app that analyzes YouTube video comments using Natural Language Processing (TextBlob). It provides interactive sentiment charts, top comment adjectives, and downloadable PDF reports. Built with Flask and Chart.js, it supports real-time analysis of comments ",
    image: projects5,
    link: "https://github.com/akash-collab/Creator-s_Analysis_Website",
    deploy: ""
  },
  {
    name: "Coffee Shop",
    type: "Frontend",
    description: "Coffee Shop Website is a fully responsive frontend project with a modern UI, featuring product listings, cart and wishlist UI, interactive previews, blog toggles, search, and a styled contact form.",
    image: projects6,
    link: "https://github.com/akash-collab/Coffee_Shop_Full_Responsive_Website",
    deploy: "https://coffee-shop-full-responsive-website.vercel.app"
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "A passionate problem-solver and creative thinker, I thrive on transforming ideas into real-world applications that make a difference. With a strong foundation in software development, I enjoy building intuitive and efficient solutions that prioritize user experience and performance. Adaptable and quick to learn, I bring a collaborative spirit to every project I’m part of.",

    "I specialize in building dynamic, responsive web interfaces using React, Next.js, and Tailwind CSS. I believe in writing clean, scalable code and aligning development with real user needs and business goals. Whether working independently or with cross-functional teams, I’m always focused on delivering impactful results and continuously growing as a developer.",
  ],
};

export const EDUCATION = [
  {
    yearRange: "2025",
    title: "Full-Stack Web Development",
    location: "Masai School, Bangalore",
    description: [
      "Completed a 35-week intensive training program focused on full-stack development.",
      "Worked with technologies like HTML, CSS, JavaScript, React, Express, and MongoDB.",
      "Built and deployed multiple real-world projects, including a full-stack app with authentication and role-based access.",
    ],
  },
  {
    yearRange: "2022 - 2024",
    title: "Masters Of Computer Applications",
    location: "Techno India University",
    description: [
      "CGPA - 8.34",
      "Created A College App Project for the seamless interaction between Students and Teachers",
      "An Website to provide with the sentiment analysis of Youtube Video Comments",
    ],
  },
  {
    yearRange: "2019 — 2022",
    title: "Bachelor of Computer Applications",
    location: "Tachno Mains, Salt Lake",
    description: [
      "CGPA - 9.38",
      "Created a Library Management App for the Major Project using Java.",
      "University Name - Maulana Abul Kalam Azad University of Technology",
    ],
  },
];

export const INTERNSHIP = [
  {
    name: "Code Clause",
    title: "Web Developer",
    desc:
      "During my 3-month internship with Code Clause, I worked on two impactful projects: a Face Recognition System, which involved implementing advanced algorithms for identifying and verifying faces, and a Word-to-PDF Converter, a tool to seamlessly convert Word documents into PDF format. This experience enhanced my skills in software development, debugging, and working with practical solutions to real-world challenges.",
    image: codeclause,
    project: [
      {
        name: "Word to Pdf Convertor",
        url: "https://github.com/akash-collab/Word_to_Pdf",
        image: internpro1,
        desc: "Created using HTML, CSS, Javascript"
      },
      {
        name: "Face Login System",
        url: "https://github.com/akash-collab/Face_Login",
        image: internpro2,
        desc: "Created using HTML, CSS, Javascript"
      }
    ]
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to Work for your Company on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "akashakii774@gmail.com",
  socialLinks: [
    {
      platform: "Leetcode",
      url: "https://leetcode.com/u/akashakii774/",
      ariaLabel: "View my Leetcode Profile",
      icon: leetcode,
    },
    {
      platform: "GitHub",
      url: "https://github.com/akash-collab",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/akash-paul-dev/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Akash Paul. All rights reserved.`,
};
