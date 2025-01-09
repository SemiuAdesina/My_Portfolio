import React from 'react';
import { motion } from 'framer-motion'; 
import Damoz_nighty from '../assets/Damoz_nighty.png';
import Damoz_re from '../assets/Damoz_re.png';
import mail_icon from '../assets/mail_icon.png';
import mail_icon_dark from '../assets/mail_icon_dark.png';
import github_icon from '../assets/github-icon.png';
import linkedin_icon from '../assets/linkedin-icon.png';
import whatsapp_icon from '../assets/whatsapp-icon.png';
import x_icon from '../assets/x-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <motion.div
      className="mt-20"
      initial="initial"
      whileInView="whileInView"
      transition="transition"
      variants={fadeIn}
    >
      {/* Logo Section */}
      <div className="text-center">
        <motion.img
          src={Damoz_re}
          alt="Damoz Logo"
          className="w-28 mx-auto mb-2 dark:hidden"
          {...fadeIn}
        />
        <motion.img
          src={Damoz_nighty}
          alt="Damoz Logo Dark"
          className="w-28 mx-auto mb-2 hidden dark:block"
          {...fadeIn}
        />
        {/* Email Section */}
        <motion.div className="flex flex-col items-center gap-2 mx-auto text-sm sm:text-base" {...fadeIn}>
          <div className="flex items-center gap-2">
            <motion.img
              src={mail_icon}
              alt="Mail Icon"
              className="w-5 sm:w-6 dark:hidden"
              {...fadeIn}
            />
            <motion.img
              src={mail_icon_dark}
              alt="Mail Icon Dark"
              className="w-5 sm:w-6 hidden dark:block"
              {...fadeIn}
            />
            <motion.span className="text-gray-700 dark:text-white text-center text-xs sm:text-sm" {...fadeIn}>
              ademolaadesinadev@gmail.com
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Social Media Section */}
      <motion.div
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-6 sm:mx-[10%] mt-12 py-6"
        {...fadeIn}
      >
        {/* Copyright Section with Extra Margin for Phone Screens */}
        <motion.p
          className="text-xs sm:text-sm flex flex-wrap items-center justify-center gap-2 text-gray-700 dark:text-white mb-6 sm:mb-0 max-[400px]:mb-8"
          {...fadeIn}
        >
          © {currentYear} Ademola Adesina. All rights reserved.
        </motion.p>

        {/* Social Media Section with Reduced Size and Extra Margin */}
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-[400px]:gap-3 max-[400px]:mt-2"
          {...fadeIn}
        >
          {/* GitHub */}
          <li className="flex items-center gap-2">
            <motion.img
              src={github_icon}
              alt="GitHub Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
              {...fadeIn}
            />
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/semiuAdesina"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
              {...fadeIn}
            >
              GitHub
            </motion.a>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-2">
            <motion.img
              src={linkedin_icon}
              alt="LinkedIn Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
              {...fadeIn}
            />
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/semiu-ademola-adesina-585141319?trk=contact-info"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
              {...fadeIn}
            >
              LinkedIn
            </motion.a>
          </li>

          {/* Twitter (X) */}
          <li className="flex items-center gap-2">
            <motion.img
              src={x_icon}
              alt="X Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
              {...fadeIn}
            />
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/Damozpixie1"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
              {...fadeIn}
            >
              Twitter
            </motion.a>
          </li>

          {/* WhatsApp */}
          <li className="flex items-center gap-2">
            <motion.img
              src={whatsapp_icon}
              alt="WhatsApp Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
              {...fadeIn}
            />
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/c/2348123057607"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
              {...fadeIn}
            >
              WhatsApp
            </motion.a>
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
