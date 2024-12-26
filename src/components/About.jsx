import React from "react";
import { motion } from "framer-motion";
import demola from "../assets/demola.png";
import circular_text from "../assets/circular_text.png";
import dev_icon from "../assets/dev-icon.png";
import code_icon from "../assets/code-icon.png";
import code_icon_dark from "../assets/code-icon-dark.png";
import edu_icon from "../assets/edu-icon.png";
import edu_icon_dark from "../assets/edu-icon-dark.png";
import project_icon from "../assets/project-icon.png";
import project_icon_dark from "../assets/project-icon-dark.png";
import tailwind_css_icon from "../assets/tailwind-css-icon.png";
import branching_icon from "../assets/branching-icon.png";
import express_js_icon from "../assets/express-js-icon.png";
import git_icon from "../assets/git-icon.png";
import javascript_icon from "../assets/javascript-programming-language-icon.png";
import mongodb_icon from "../assets/mongodb-icon.png";
import mysql_icon from "../assets/mysql-icon.png";
import node_js_icon from "../assets/node-js-icon.png";
import postman_icon from "../assets/postman-icon.png";
import react_js_icon from "../assets/react-js-icon.png";
import vscode_icon from "../assets/visual-studio-code-icon.png";

const About = () => {
  // Animation variants for the tools
  const toolAnimation = {
    hover: { scale: 1.1, rotate: 10 },
    tap: { scale: 0.95 },
  };

  return (
    <div id="about" className="w-full px-6 md:px-10 lg:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">About me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20">
        {/* Image Section */}
        <div className="max-w-max mx-auto relative group flex-shrink-0">
          {/* Light Blue Background Hover */}
          <div className="absolute inset-0 bg-blue-100 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>

          {/* Profile Image */}
          <img
            src={demola}
            alt="Profile"
            className="w-48 sm:w-56 md:w-64 lg:w-80 rounded-3xl max-w-none relative z-10"
          />

          {/* Circular Image */}
          <div className="bg-white w-1/3 sm:w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center z-20">
            <img
              src={circular_text}
              alt="Circular"
              className="w-full rounded-full animate-spin_slow"
            />
            <img
              src={dev_icon}
              alt="Developer Icon"
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <p className="mb-6 lg:mb-10 text-sm sm:text-base md:text-lg max-w-2xl font-Ovo">
            I am a Full-Stack Software Developer with a passion for creating
            scalable, efficient, and user-friendly web applications. With
            expertise in both front-end and back-end technologies, I have
            delivered high-quality solutions for diverse projects. I thrive in
            dynamic environments, leveraging my technical skills to solve
            challenging problems and bring ideas to life.
          </p>

          {/* Skill Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={code_icon} alt="Code Icon" className="w-6 sm:w-7 mt-2 sm:mt-3 dark:hidden" />
              <img
                src={code_icon_dark}
                alt="Code Icon Dark"
                className="w-6 sm:w-7 mt-2 sm:mt-3 hidden dark:block"
              />
              <h3 className="my-3 sm:my-4 text-sm sm:text-base font-semibold text-gray-700 dark:text-white">
                Languages
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-white/80">
                JavaScript, Node.js, Express.js, MongoDB, MySQL
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={edu_icon} alt="Education Icon" className="w-6 sm:w-7 mt-2 sm:mt-3 dark:hidden" />
              <img
                src={edu_icon_dark}
                alt="Education Icon Dark"
                className="w-6 sm:w-7 mt-2 sm:mt-3 hidden dark:block"
              />
              <h3 className="my-3 sm:my-4 text-sm sm:text-base font-semibold text-gray-700 dark:text-white">
                Education
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-white/80">
                Bachelor's Degree in Pharmacy
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={project_icon} alt="Projects Icon" className="w-6 sm:w-7 mt-2 sm:mt-3 dark:hidden" />
              <img
                src={project_icon_dark}
                alt="Projects Icon Dark"
                className="w-6 sm:w-7 mt-2 sm:mt-3 hidden dark:block"
              />
              <h3 className="my-3 sm:my-4 text-sm sm:text-base font-semibold text-gray-700 dark:text-white">
                Projects
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-white/80">
                Built more than 30 projects
              </p>
            </li>
          </ul>

          {/* Tools Section */}
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>
          <ul className="flex flex-wrap gap-3 sm:gap-5 mb-10">
            {[
              tailwind_css_icon,
              branching_icon,
              express_js_icon,
              git_icon,
              javascript_icon,
              mongodb_icon,
              mysql_icon,
              node_js_icon,
              postman_icon,
              react_js_icon,
              vscode_icon,
            ].map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer"
                variants={toolAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                <img src={tool} alt="Tool Icon" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>

          {/* Certificates Section */}
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Certificates
          </h4>
          <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm">
            <li>
              <a
                href="https://coursera.org/verify/1RZVVK9DRQSU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                IBM Certificate 1: Developing Back-End Apps with Node.js and
                Express
              </a>
            </li>
            <li>
              <a
                href="https://coursera.org/verify/ZCBM4C104RLR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                IBM Certificate 2: Getting Started with Git and GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
