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

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#internship", label: "Internship" },
  { href: "#contact", label: "Contact" },
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
    name: "Socify",
    description: "A Full Stack Social Media App",
    image: projects1,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "Chatios",
    description: "An Interactive and Real-Time Chat Application",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "College App",
    description: "An Android App to fecilitate the seamless connectivity between Students and Teachers ",
    image: projects3,
    link: "https://github.com/akash-collab/College-App",
  },
  {
    name: "Weather App",
    description:
      "Real-time Weather App providing accurate forecasts",
    image: projects4,
    link: "https://github.com/akash-collab/Weather-Website",
  },
  {
    name: "Creator's Analysis Tool",
    description: "Analyze YouTube comments effortlessly ",
    image: projects5,
    link: "https://github.com/akash-collab/Creator-s_Analysis_Website",
  },
  {
    name: "Coffee Shop",
    description: "An App for coffee Enthusiasts.",
    image: projects6,
    link: "https://github.com/akash-collab/Coffee_Shop_Full_Responsive_Website",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Motivated and adaptable software developer with expertise in  Java, JavaScript,React Js, Node.js, and API integration. With a strong foundation in software development and problem-solving, I excel in creating efficient,user-focused solutions. A fast learner and effective collaborator, I am eager to contribute for an Organization for the growth of both of us.",

    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EDUCATION = [
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
  {
    yearRange: "2018",
    title: "Higher Secondary Education",
    location: "De Nobili CMRI, Dhanbad",
    description: [
      "Percentage - 71",
      "Council for the Indian School Certificate Examinations",
      "Specialized with Physics, Chemistry and Maths as Major",
    ],
  },
  {
    yearRange: "2016",
    title: "Secondary Education",
    location: "De Nobili CMRI, Dhanbad",
    description: [
      "Percentage - 81",
      "Council for the Indian School Certificate Examinations",
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
        name:"Word to Pdf Convertor",
        url: "https://github.com/akash-collab/Word_to_Pdf",
        image: internpro1,
        desc:"Created using HTML, CSS, Javascript"
      },
      {
        name:"Face Login System",
        url: "https://github.com/akash-collab/Face_Login",
        image: internpro2,
        desc:"Created using HTML, CSS, Javascript"
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
      url: "https://linkedin.com/in/akashpauldev",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Akash Paul. All rights reserved.`,
};
