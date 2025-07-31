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
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/40 text-white transition duration-300">
                                <h2 className="text-2xl font-semibold mb-4 drop-shadow">
                                    {project.name}
                                </h2>
                                <div className="flex flex-col justify-between flex-grow">
                                    <p className="mb-4 text-lg drop-shadow">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-stone-900 rounded-full py-2 px-4 w-fit text-sm font-semibold hover:bg-gray-200 transition"
                                    >
                                        View On GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;