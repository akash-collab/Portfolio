import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import QRCode from "react-qr-code";
import akash from "../assets/akash_paul.webp";
import { Typewriter } from "react-simple-typewriter";
import "../index.css";

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

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white"
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

        {/* Typewriter Effect with Reserved Space */}
        <motion.div
          className="relative mb-4 text-xl md:text-2xl lg:text-4xl text-white"
          variants={textVariants}
        >
          {/* Reserve space without removing it from layout flow */}
          <div className="invisible block">
            {HERO_CONTENT.introduction}
          </div>

          {/* Actual typewriter animation */}
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

          <div className="ml-4 hidden sm:block">
            <QRCode value={resumeURL} size={100} />
          </div>
        </motion.div>
      </motion.div>

      {/* Image Section with Hover Animation */}
      <motion.div
        className="w-full md:w-1/2 p-8 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.img
          src={akash}
          alt="Akash Paul"
          width={500}
          height={500}
          className="rounded-3xl shadow-lg"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Hero;