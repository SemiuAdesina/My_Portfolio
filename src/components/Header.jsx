import React from "react";
import { motion } from "framer-motion";
import Typewriter from "react-typing-effect";
import pro from "../assets/pro.jpg";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import hand_icon from "../assets/hand_icon.png";
import my_cv from "../assets/My_CV.pdf";

const Header = () => {
  const rippleVariants = {
    start: { scale: 0, opacity: 1 },
    end: { scale: 3, opacity: 0 },
  };

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-16 lg:mt-20">
      {/* Ripple Effect Container */}
      <div className="relative flex items-center justify-center w-40 h-40">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full rounded-full bg-blue-400 z-0"
            initial="start"
            animate="end"
            variants={rippleVariants}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}

        {/* Profile Image */}
        <img
          src={pro}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover relative z-10"
        />
      </div>

      {/* Dynamic Typewriter Text */}
      <h3 className="flex flex-col gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        <span className="italic">
          Full-Stack Engineer
          <img src={hand_icon} alt="Hand waving" className="w-6 inline ml-2" />
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
      </h3>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full-Stack Software Engineer | MERN Stack Specialist | Freelance Expert
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a Full-Stack Software Engineer with over 2 years of experience
        building dynamic, responsive, and scalable web applications. I
        specialize in the MERN stack (MongoDB, Express, React, Node.js) and have
        worked on various freelance projects for clients worldwide through
        Upwork. My expertise includes creating modern e-commerce platforms,
        management systems, and custom APIs to meet unique client needs.
      </p>

      {/* Call-to-Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact Me{" "}
          <img src={right_arrow_white} alt="Arrow Icon" className="w-4" />
        </a>
        <a
          href={my_cv}
          download="Ademola_Adesina_CV.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume{" "}
          <img src={download_icon} alt="Download Icon" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
