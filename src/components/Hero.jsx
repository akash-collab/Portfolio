import { motion, useAnimation } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import QRCode from "react-qr-code";
import akash from "../assets/akash_paul.webp";
import { Typewriter } from "react-simple-typewriter";
import "../index.css";
import { SKILLS } from "../constants/index";
import { useState, useEffect } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {
    clipPath: "inset(0 50% 0 50%)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.6, ease: "easeIn" },
  },
};

const Hero = () => {
  const resumeURL =
    "https://drive.google.com/file/d/1tFj1gkQqWQMOkrUXWaXmnIKHF6zzlqZj/view?usp=sharing";

  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
  if (!isPaused) {
    controls.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  } else {
    controls.stop();
  }
}, [isPaused, controls]);

  const handleMouseEnter = () => setIsPaused(true);
const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white "
      >
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-10 font-semibold tracking-tight"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            className="relative mb-4 text-xl md:text-2xl lg:text-4xl text-white"
            variants={textVariants}
          >
            <div className="invisible block">{HERO_CONTENT.introduction}</div>
            <div className="absolute top-0 left-0">
              <Typewriter
                words={[HERO_CONTENT.introduction]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </motion.div>

<div
  className="relative w-[90%] max-w-[600px] h-12 my-6 flex items-center rounded-md backdrop-blur-md shadow-md overflow-hidden group"
>
  {/* Fading Edges */}
  <div className="absolute left-0 top-0 h-full w-6 z-10 bg-gradient-to-r  to-transparent pointer-events-none" />
  <div className="absolute right-0 top-0 h-full w-6 z-10 bg-gradient-to-l  to-transparent pointer-events-none" />

  {/* Animated Scrolling Skills */}
  <motion.div
    className="whitespace-nowrap flex w-max gap-12 animate-none px-4"
    animate={controls}
    initial={{ x: 0 }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {[...SKILLS, ...SKILLS].map((skill, index) => (
      <div
        key={index}
        className="inline-flex items-center gap-2 mx-4 text-base"
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-7 h-7 object-contain aspect-square"
          loading="lazy"
        />
        <span>{skill.name}</span>
      </div>
    ))}
  </motion.div>
</div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>

          {/* Resume Link & QR Code */}
          <motion.div
            className="flex items-center space-x-6 mt-8"
            variants={textVariants}
          >
            <a
              href={resumeURL}
              download
              rel="noopener noreferrer"
              target="_blank"
              className="bg-stone-50 text-stone-900 px-4 py-3 lg:px-5 lg:py-4 rounded-2xl hover:bg-gray-300 font-medium transition"
              aria-label="Download Resume"
            >
              {HERO_CONTENT.resumeLinkText}
            </a>

            <div className="ml-4 hidden sm:block text-center">
              <div className="p-2 border-2 border-white rounded-lg shadow-lg bg-white inline-block">
                <QRCode value={resumeURL} size={100} />
              </div>
              <p className="mt-2 text-xl text-white font-semibold">Scan Here</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 p-8 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <motion.img
            src={akash}
            alt="Akash Paul"
            className="rounded-3xl shadow-lg w-[300px] md:w-[350px] lg:w-[400px] h-auto object-cover"
            loading="lazy"
            whileHover={{ scale: 0.98, rotate: 2 }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;