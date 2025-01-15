import { motion } from "framer-motion"
import { INTERNSHIP } from "../constants/index"

const Internship = () => {
    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.5,
            }
        })
    }

    return (
        <section className="px-6 py-16 min-h-screen" id="internship">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-12 leading-tight">
                Internship
            </h1>
            <div className="h-1 w-20 bg-white mb-8"></div>
            <div className="grid grid-cols-1 gap-12">
                {INTERNSHIP.map((internship, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-xl p-8 min-h-full bg-stone-500/10 "
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={childVariants}>
                        <div className="flex items-center mb-8">
                            <img
                                src={internship.image}
                                alt={internship.name}
                                className="w-16 h-16 rounded-full mr-6"
                                loading="lazy" />
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-2">
                                    {internship.name}
                                </h2>
                                <p className="text-lg font-light text-gray-300">{internship.title}</p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-200 mb-6">{internship.desc}</p>
                        
                        <div className="mt-8">
                            <h3 className="text-3xl font-semibold text-white mb-6">Projects :</h3> 
                            <div className="space-y-8">
                                {internship.project.map((project, index) => (
                                    <div key={index} className="flex items-center space-x-8  p-6 rounded-lg transition-all duration-300">
                                        <img 
                                            src={project.image} 
                                            alt={project.name} 
                                            className="w-28 h-28 rounded-full border-4 border-white transition-all duration-300 transform hover:scale-105" loading="lazy"
                                        />
                                        <div>
                                            <h4 className="text-xl text-green mb-2">{project.name}</h4>
                                            <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                                            <a 
                                                href={project.url} 
                                                className="bg-white text-black py-2 px-4 rounded-full  transition-all duration-300 hover:bg-gray-300"
                                                target="_blank" 
                                                rel="noopener noreferrer">
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
        </section>
    )
}

export default Internship
