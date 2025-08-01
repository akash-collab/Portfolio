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
import htmlIcon from "../assets/icons/html.webp";
import cssIcon from "../assets/icons/css.webp";
import jsIcon from "../assets/icons/javascript.webp";
import tailwindIcon from "../assets/icons/tailwind.webp";
import reactIcon from "../assets/icons/react.webp";
import expressIcon from "../assets/icons/express.webp";
import firebaseIcon from "../assets/icons/firebase.webp";
import mongodbIcon from "../assets/icons/mongodb.webp";
import githubIcon from "../assets/icons/github.webp";
import postmanIcon from "../assets/icons/postman.webp";
import reduxIcon from "../assets/icons/redux.webp";
import typescriptIcon from "../assets/icons/typescript.webp";
import vscodeIcon from "../assets/icons/vscode.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#internship", label: "Internship" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "React JS", icon: reactIcon },
  { name: "Express JS", icon: expressIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Github", icon: githubIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "VS Code", icon: vscodeIcon },
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
    description: "A Book App",
    image: projects1,
    link: "https://github.com/akash-collab/bookverse",
    deploy: "https://bookverse-beta.vercel.app/"
  },
  {
    name: "Loan Application System",
    description: "An Interactive and Real-Time Loan Application",
    image: projects2,
    link: "https://github.com/akash-collab/Loan-Application-System",
    deploy: "https://loan-application-system-lovat.vercel.app/"
  },
  {
    name: "MealMaster App",
    description: "Personalized meal planner with AI. ",
    image: projects3,
    link: "https://github.com/akash-collab/MealMaster",
    deploy: "https://mealmaster-frontend.onrender.com"
  },
  {
    name: "Weather App",
    description:
      "Real-time Weather App providing accurate forecasts",
    image: projects4,
    link: "https://github.com/akash-collab/Weather-Website",
    deploy: "https://weather-website-olive.vercel.app/"
  },
  {
    name: "Creator's Analysis Tool",
    description: "Analyze YouTube comments effortlessly ",
    image: projects5,
    link: "https://github.com/akash-collab/Creator-s_Analysis_Website",
    deploy: ""
  },
  {
    name: "Coffee Shop",
    description: "An App for coffee Enthusiasts.",
    image: projects6,
    link: "https://github.com/akash-collab/Coffee_Shop_Full_Responsive_Website",
    deploy: "coffee-shop-full-responsive-website.vercel.app"
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
    location: "MASAI School, Bangalore",
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
