// CompanyLogos.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { logos } from "@/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95, blur: 2 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      stiffness: 120,
      damping: 14,
    },
  },
};

const CompanyLogos: React.FC = () => {
  return (
    <section className="py-20 w-full bg-gradient-to-br via-slate-800 to-slate-900 text-white">
       <h2 className="text-5xl font-extrabold text-center mb-20 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                <span className="block sm:inline">Tech Titans</span>
                <span className="block sm:inline text-#FFB6C1"> We Adore</span>
            </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0px 8px 40px rgba(0, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.96 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 hover:shadow-cyan-500/30"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              width={64}
              height={64}
              className="object-contain w-16 h-16 hover:grayscale-0 transition duration-500 ease-in-out"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-12 text-gray-400 text-lg">
                <p>These companies inspire me with their innovation and impact.</p>
            </div>
    </section>
  );
};

export default CompanyLogos;
