import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
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
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      {/* Animated wavy background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,1000 C200,950 300,925 500,925 C700,925 800,950 1000,1000"
            fill="url(#grad1)"
            initial={{
              d: "M0,1000 C200,950 300,925 500,925 C700,925 800,950 1000,1000",
            }}
            animate={{
              d: "M0,1000 C200,900 300,800 500,800 C700,800 800,900 1000,1000",
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,1000 C200,975 400,950 600,950 C800,950 900,975 1000,1000"
            fill="url(#grad1)"
            initial={{
              d: "M0,1000 C200,975 400,950 600,950 C800,950 900,975 1000,1000",
            }}
            animate={{
              d: "M0,1000 C200,950 400,900 600,900 C800,900 900,950 1000,1000",
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container flex justify-center mx-auto py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end md:mr-12 mr-0"
          >
            <motion.div
              className="relative w-40 h-40 md:w-52 md:h-52 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/assets/me.jpg"
                alt="Andre Irawan"
                fill
                className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
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
              className="flex flex-row items-center text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Frontend Engineer at Traveloka
              <div className="relative w-10 h-10">
                <Image
                  src={"/assets/traveloka-logo.png"}
                  alt={`Traveloka logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.h2>

            <motion.div
              className="flex justify-center md:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.a
                href="mailto:andreirawan97@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/andreirawan"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/andreirawan97"
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
