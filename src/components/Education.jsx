import { motion } from 'framer-motion'
import { EDUCATION } from '../constants/index'

const Education = () => {
  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0,     
    },
  },
}

  const childVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,     
      ease: "easeOut",
    },
  },
}

  return (
    <section className="px-6 py-10" id="education">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-0 leading-tight" style={{ lineHeight: '3' }}>
        Education
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants} // ✅ corrected here
      >
        {EDUCATION.map((education, index) => (
          <motion.div key={index} variants={childVariants}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
                {education.yearRange}
              </div>
              <div className="md:w-3/4 mb-10">
                <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                  <h2 className="text-xl mb-2">{education.title}</h2>
                  <p className="mb-4 text-sm italic">{education.location}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {education.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Education

