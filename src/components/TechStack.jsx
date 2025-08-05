import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <section
      id="techStacks"
      className="py-28 px-6 md:px-8 lg:px-20 flex flex-col items-center"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-medium text-white mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h1>

      {/* Grid View with Cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#38bdf8] transition duration-300 text-white flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <skill.icon className="text-5xl text-[#38bdf8] drop-shadow-md" />
            <span className="text-sm md:text-base text-center text-gray-300 group-hover:text-white">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;