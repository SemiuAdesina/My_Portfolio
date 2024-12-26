import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import frontend_icon from "../assets/website-layout-icon.png"; // Frontend Icon
import backend_icon from "../assets/database-web-app-code-icon.png"; // Backend Icon
import right_arrow from "../assets/right-arrow.png";

const Services = () => {
  // Animation variants for the cards
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a Frontend Developer | Backend Developer with 2 years of freelance
        experience on LinkedIn and Upwork, delivering high-quality web
        applications and solutions to clients globally. I specialize in building
        scalable, user-friendly, and visually appealing web applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 justify-center">
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
            className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-gray-100 dark:hover:bg-gray-700" // Added hover background color
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src={service.icon} alt={service.title} className="w-10 mx-auto" />
            <h3 className="text-lg my-4 text-center text-gray-700 dark:text-white">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center">
              {service.description}
            </p>
            <a
              href="#"
              className="flex items-center justify-center gap-2 text-sm mt-5 text-blue-500 hover:underline"
            >
              Read more <img src={right_arrow} alt="Arrow" className="w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
