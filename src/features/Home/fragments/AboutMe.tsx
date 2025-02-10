import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="bg-[#1D1D1D] py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700"></div>
          <blockquote className="text-lg md:text-xl italic font-light text-gray-300 pl-8">
            I am a Software Engineer with over 5 years of experience in Frontend
            Engineering with a thorough knowledge of UI/UX principles and
            responsive design. Proven track record of delivering high-quality
            and scalable code on time. Skilled in translating complex designs
            and requirements into refined frontend applications.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
