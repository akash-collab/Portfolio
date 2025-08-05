import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../constants/index';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 }
    })
  };

  return (
    <section className="px-6 py-16" id="about">
      <h1 className="text-4xl md:text-6xl font-medium tracking-light mb-10">
        About
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <article className="max-w-4xl mx-auto space-y-10">
        {ABOUT_CONTENT?.paragraphs?.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed roboto-font"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={index}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </article>
    </section>
  );
};

export default About;