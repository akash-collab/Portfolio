import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import QRCode from "react-qr-code"; 
import akash from "../assets/akash_paul.jpg";

const textvariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  const resumeURL = "https://drive.google.com/uc?export=download&id=1N32-Uj8iubzjgztIHx6oG7tlwzgQ_Yml"; // Updated for direct download

  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textvariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textvariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl"
            variants={textvariants}
          >
            {HERO_CONTENT.description}
          </motion.p>

          {/* Resume Button and QR Code */}
          <motion.div
            className="flex items-center space-x-8 mt-8"
            variants={textvariants}
          >
            <motion.a
              className="bg-stone-50 text-stone-900 p-3 lg:p-4 inline-block rounded-2xl hover:bg-gray-300"
              href={resumeURL}
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              {HERO_CONTENT.resumeLinkText}
            </motion.a>
            {/* QR Code */}
            <div className="ml-6">
              <QRCode value={resumeURL} size={100} />
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 p-8 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={akash}
            alt="Akash Paul"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;