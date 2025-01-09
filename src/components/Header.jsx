import React from "react";
import { motion } from "framer-motion";
import Typewriter from "react-typing-effect";
import pro from "../assets/pro.jpg";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import hand_icon from "../assets/hand_icon.png";
import my_cv from "../assets/My_CV.pdf";

const Header = () => {
  // Animation for the profile image (spring effect)
  const profileImageAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, type: "spring", stiffness: 100 },
  };

  // General animation for all other elements
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      className="w-full max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-6 mt-12 lg:mt-20"
      initial="initial"
      whileInView="whileInView"
      transition="transition"
      variants={fadeInAnimation}
    >
      {/* Profile Image (Fixed for all screen sizes) */}
      <motion.div
        className="relative flex items-center justify-center w-28 sm:w-36 md:w-40 lg:w-44 h-28 sm:h-36 md:h-40 lg:h-44"
        {...profileImageAnimation}
      >
        <img
          src={pro}
          alt="Profile"
          className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white dark:border-darkTheme shadow-lg"
        />
      </motion.div>

      {/* Dynamic Typewriter Text */}
      <motion.h3
        className="flex flex-col gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo"
        {...fadeInAnimation}
      >
        <span className="italic">
          Full-Stack Engineer
          <img src={hand_icon} alt="Hand waving" className="w-5 sm:w-6 inline ml-2" />
        </span>
        <Typewriter
          text={[
            "Hi, I'm Ademola Adesina",
            "Guy-who-turns-ideas-into-code.jsx",
            "<Always-Coding,-Never-Static/>",
          ]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
        />
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        className="text-2xl sm:text-4xl lg:text-5xl font-Ovo"
        {...fadeInAnimation}
      >
        Full-Stack Software Engineer | MERN Stack Specialist | Freelance Expert
      </motion.h1>

      {/* Description */}
      <motion.p
        className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-Ovo"
        {...fadeInAnimation}
      >
        I am a Full-Stack Software Engineer with over 2 years of experience
        building dynamic, responsive, and scalable web applications. I
        specialize in the MERN stack (MongoDB, Express, React, Node.js) and have
        worked on various freelance projects for clients worldwide through
        Upwork. My expertise includes creating modern e-commerce platforms,
        management systems, and custom APIs to meet unique client needs.
      </motion.p>

      {/* Call-to-Actions */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        {...fadeInAnimation}
      >
        <a
          href="#contact"
          className="px-8 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact Me{" "}
          <img src={right_arrow_white} alt="Arrow Icon" className="w-4" />
        </a>
        <a
          href={my_cv}
          download="Ademola_Adesina_CV.pdf"
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume{" "}
          <img src={download_icon} alt="Download Icon" className="w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;

