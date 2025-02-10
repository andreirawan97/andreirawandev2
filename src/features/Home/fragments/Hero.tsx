import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Halo", "Hello", "Bonjour", "안녕하세요", "こんにちは"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#1D1D1D]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="container flex justify-center mx-auto py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end md:mr-8 mr-0"
          >
            <motion.div
              className="relative w-40 h-40 md:w-48 md:h-48"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/assets/placeholder.svg"
                alt="Andre Irawan"
                fill
                className="rounded-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.div
              className="flex items-center justify-center md:justify-start mb-4 space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span ref={typedRef} className="text-2xl text-white"></span>
              <span className="text-2xl animate-wave">👋</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-2 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Andre Irawan
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Frontend Engineer at Traveloka
            </motion.h2>

            <motion.div
              className="flex justify-center md:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourprofile"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/yourusername"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
            </motion.div>

            <motion.div
              transition={{ duration: 0.5, delay: 1.3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-[#d9d9d9] text-[#1D1D1D] font-medium rounded-full hover:bg-gray-300 transition-colors"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
