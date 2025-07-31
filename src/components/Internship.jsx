import { motion } from "framer-motion";
import { INTERNSHIP } from "../constants/index";

const Internship = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.5,
      },
    }),
  };

  return (
    <motion.section
      className="px-6 py-16 min-h-screen"
      id="internship"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 leading-tight">
        Internship
      </h1>
      <div className="h-1 w-20 bg-white mb-12"></div>

      <div className="grid grid-cols-1 gap-12">
        {INTERNSHIP.map((internship, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl p-8 bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={childVariants}
            viewport={{ once: true }}
          >
            {/* Internship Header */}
            <div className="flex items-center mb-8">
              <img
                src={internship.image}
                alt={internship.name}
                className="w-16 h-16 rounded-full mr-6"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl font-semibold text-white mb-1">
                  {internship.name}
                </h2>
                <p className="text-lg font-light text-gray-300">{internship.title}</p>
              </div>
            </div>

            {/* Internship Description */}
            <p className="text-lg text-gray-200 mb-6">{internship.desc}</p>

            {/* Projects */}
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-white mb-6">Projects:</h3>
              <div className="space-y-8">
                {internship.project.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 p-6 rounded-lg bg-stone-800/30 transition-all duration-300"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-28 h-28 rounded-full border-4 border-white transition-all duration-300 transform hover:scale-105"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl text-green-400 mb-2">{project.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                      <a
                        href={project.url}
                        className="inline-block bg-white text-black py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See on GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Internship;