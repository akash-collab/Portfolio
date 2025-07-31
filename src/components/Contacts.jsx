import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants/index";
import { RiTwitterXFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import leetcode from "../assets/leetcode.png";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: custom,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: custom,
    },
  }),
};

// Map icon strings to components
const ICON_MAP = {
  RiGithubFill: RiGithubFill,
  RiLinkedinFill: RiLinkedinFill,
  RiTwitterXFill: RiTwitterXFill,
};

const Contacts = () => {
  // Sequential delay step
  let delayStep = 0.2;
  let currentDelay = 0;

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-medium tracking-tight mb-10"
        initial="hidden"
        whileInView="visible"
        custom={(currentDelay += delayStep)}
        variants={textVariants}
      >
        Contact
      </motion.h2>

      {/* Divider */}
      <motion.div
        className="h-1 w-20 bg-white mb-8"
        initial="hidden"
        whileInView="visible"
        custom={(currentDelay += delayStep)}
        variants={textVariants}
      />

      {/* Headline */}
      <motion.h3
        className="text-6xl md:text-8xl leading-none"
        initial="hidden"
        whileInView="visible"
        custom={(currentDelay += delayStep)}
        variants={textVariants}
      >
        {CONTACT_CONTENT?.headline}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={(currentDelay += delayStep)}
        variants={textVariants}
      >
        {CONTACT_CONTENT?.description}
      </motion.p>

      {/* Email */}
      <motion.a
        href={`mailto:${CONTACT_CONTENT?.email}`}
        className="text-2xl md:text-3xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        custom={(currentDelay += delayStep)}
        variants={textVariants}
      >
        {CONTACT_CONTENT?.email}
      </motion.a>

      {/* Social Icons */}
      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT?.socialLinks?.map((link) => {
          const delay = (currentDelay += delayStep);

          if (typeof link.icon === "string" && link.icon === leetcode) {
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                initial="hidden"
                whileInView="visible"
                custom={delay}
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
              initial="hidden"
              whileInView="visible"
              custom={delay}
              variants={iconVariants}
            >
              <Icon
                size={36}
                className="hover:scale-110 transition-transform text-white"
              />
            </motion.a>
          );
        })}
      </div>

      {/* Footer */}
      <motion.p
        className="text-sm text-white mt-36"
        initial="hidden"
        whileInView="visible"
        custom={(currentDelay += delayStep)}
        variants={textVariants}
      >
        {CONTACT_CONTENT?.footerText}
      </motion.p>
    </section>
  );
};

export default Contacts;