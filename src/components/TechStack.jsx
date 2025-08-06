import React, { useState } from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const categories = ["All", "Frontend", "Backend", "Tools"];

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="techStacks"
      className="px-6 py-16 md:px-8 lg:px-20 flex flex-col items-center"
    >
      <div className="w-full max-w-6xl self-start mb-10">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
          Tech Stack
        </h1>
        <div className="h-1 w-20 mb-12 bg-white"></div>
      </div>

      {/* Category Filters */}
      <div className="mb-10 flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition duration-300 text-sm md:text-base ${selectedCategory === category
              ? "bg-[#38bdf8] text-white border-[#38bdf8]"
              : "text-gray-300 border-gray-600 hover:border-[#38bdf8] hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid View with Flip Cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10"
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
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group perspective-[1000px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[140px] h-[180px] transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden bg-gray-800 p-4 rounded-xl shadow-md group-hover:shadow-[0_0_25px_#38bdf8] flex flex-col items-center justify-center gap-4">
                <skill.icon
                  className="text-4xl text-[#38bdf8] drop-shadow-md group-hover:animate-pulse"
                  style={{ filter: `drop-shadow(0 0 6px ${skill.color || "#38bdf8"})` }}
                />
                <span className="text-sm md:text-base text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gray-900 p-4 rounded-xl shadow-inner flex flex-col justify-center items-center text-white">
                <span className="text-sm mb-2">{skill.level || "Intermediate"}</span>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#38bdf8] rounded-full"
                    style={{ width: `${skill.progress || 70}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;