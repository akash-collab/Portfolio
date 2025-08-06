import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  return (
    <section className="px-6 py-20 my-6" id="work">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white">
          Work
        </h1>
        <div className="h-1 w-20 mb-12 bg-white"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden h-[500px] shadow-lg group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Project Name & Description (hover only) */}
              {/* Project Name (always visible) */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-lg font-semibold z-10 backdrop-blur-sm">
                {project.name}
              </div>

              {/* Project Description (hover only) */}
              <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 backdrop-blur-sm flex flex-col justify-center">
                <p className="text-base drop-shadow">{project.description}</p>
              </div>

              {/* Buttons: Always visible at bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-4 z-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-stone-900 rounded-full py-2 px-4 text-sm font-semibold hover:bg-gray-200 transition"
                >
                  View on GitHub
                </a>

                {project.deploy && (
                  <a
                    href={project.deploy.startsWith("http") ? project.deploy : `https://${project.deploy}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white rounded-full py-2 px-4 text-sm font-semibold hover:bg-green-600 transition"
                  >
                    View Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;