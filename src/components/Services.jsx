import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import frontend_icon from "../assets/website-layout-icon.png"; // Frontend Icon
import backend_icon from "../assets/database-web-app-code-icon.png"; // Backend Icon
import right_arrow from "../assets/right-arrow.png";

const Services = () => {
  // Animation variants for card hover effects
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  // Fade-in animation for headings and descriptions
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial="initial"
      whileInView="whileInView"
      transition="transition"
      variants={fadeIn}
    >
      {/* Heading Section */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        variants={fadeIn}
        {...fadeIn}
      >
        What I offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        variants={fadeIn}
        {...fadeIn}
      >
        My services
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        variants={fadeIn}
        {...fadeIn}
      >
        I am a Frontend Developer | Backend Developer with 2 years of freelance
        experience on LinkedIn and Upwork, delivering high-quality web
        applications and solutions to clients globally. I specialize in building
        scalable, user-friendly, and visually appealing web applications.
      </motion.p>

      {/* Services Cards Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 justify-center"
        variants={fadeIn}
      >
        {[
          {
            icon: frontend_icon,
            title: "Frontend Development",
            description:
              "Creating visually stunning and interactive user interfaces, ensuring responsiveness and cross-platform compatibility...",
          },
          {
            icon: backend_icon,
            title: "Backend Development",
            description:
              "Building robust server-side logic, databases, and APIs for seamless communication and secure data handling...",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-gray-100 dark:hover:bg-gray-700"
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.img
              src={service.icon}
              alt={service.title}
              className="w-10 mx-auto"
              variants={fadeIn}
            />
            <motion.h3
              className="text-lg my-4 text-center text-gray-700 dark:text-white"
              variants={fadeIn}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center"
              variants={fadeIn}
            >
              {service.description}
            </motion.p>
            <motion.a
              href="#"
              className="flex items-center justify-center gap-2 text-sm mt-5 text-blue-500 hover:underline"
              variants={fadeIn}
            >
              Read more <img src={right_arrow} alt="Arrow" className="w-4" />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
