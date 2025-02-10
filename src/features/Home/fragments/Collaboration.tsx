import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Collaboration() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    if (window) {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    }
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-green-500 to-yellow-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-[#d9d9d9] mb-6">
            Want to collaborate? Feel free to{" "}
            <Link
              href="/#home"
              onClick={scrollToTop}
              className="text-[#e5e5e5] underline hover:text-white transition-colors"
            >
              contact me
            </Link>{" "}
            or{" "}
            <Link
              href="https://origa.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5e5e5] underline hover:text-white transition-colors"
            >
              click here
            </Link>{" "}
            👀
          </p>
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * innerWidth,
              y: Math.random() * innerHeight,
              scale: 0,
            }}
            animate={{
              x: Math.random() * innerWidth,
              y: Math.random() * innerHeight,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        ))}
      </div>
    </section>
  );
}
