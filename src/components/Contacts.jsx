import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants/index";
import { RiTwitterXFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import leetcode from "../assets/leetcode.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Fast stagger
      delayChildren: 0,     // No initial delay
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Icon map
const ICON_MAP = {
  RiGithubFill: RiGithubFill,
  RiLinkedinFill: RiLinkedinFill,
  RiTwitterXFill: RiTwitterXFill,
};

const Contacts = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <motion.div
        className="flex flex-col items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-medium tracking-tight mb-10"
          variants={textVariants}
        >
          Contact
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="h-1 w-20 bg-white mb-8"
          variants={textVariants}
        />

        {/* Headline */}
        <motion.h3
          className="text-6xl md:text-8xl leading-none"
          variants={textVariants}
        >
          {CONTACT_CONTENT?.headline}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-lg md:text-2xl mt-6 max-w-3xl"
          variants={textVariants}
        >
          {CONTACT_CONTENT?.description}
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${CONTACT_CONTENT?.email}`}
          className="text-2xl md:text-3xl font-medium mt-8"
          variants={textVariants}
        >
          {CONTACT_CONTENT?.email}
        </motion.a>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6 mt-8"
          variants={textVariants} // you can also make this a separate parent container if needed
        >
          {CONTACT_CONTENT?.socialLinks?.map((link) => {
            if (typeof link.icon === "string" && link.icon === leetcode) {
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  variants={iconVariants}
                >
                  <img
                    src={link.icon}
                    alt={`${link.platform} icon`}
                    className="w-9 h-9 hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                </motion.a>
              );
            }

            const Icon = ICON_MAP[link.icon] || RiTwitterXFill;

            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                variants={iconVariants}
              >
                <Icon
                  size={36}
                  className="hover:scale-110 transition-transform text-white"
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-sm text-white mt-36"
          variants={textVariants}
        >
          {CONTACT_CONTENT?.footerText}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contacts;