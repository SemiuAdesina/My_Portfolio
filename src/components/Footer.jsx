import React from 'react';
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

  return (
    <div className="mt-20">
      {/* Logo Section */}
      <div className="text-center">
        <img
          src={Damoz_re}
          alt="Damoz Logo"
          className="w-28 mx-auto mb-2 dark:hidden"
        />
        <img
          src={Damoz_nighty}
          alt="Damoz Logo Dark"
          className="w-28 mx-auto mb-2 hidden dark:block"
        />

        {/* Email Section */}
        <div className="flex flex-col items-center gap-2 mx-auto text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <img
              src={mail_icon}
              alt="Mail Icon"
              className="w-5 sm:w-6 dark:hidden"
            />
            <img
              src={mail_icon_dark}
              alt="Mail Icon Dark"
              className="w-5 sm:w-6 hidden dark:block"
            />
            <span className="text-gray-700 dark:text-white text-center text-xs sm:text-sm">
              ademolaadesinadev@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-6 sm:mx-[10%] mt-12 py-6">
        {/* Copyright Section with Extra Margin for Phone Screens */}
        <p className="text-xs sm:text-sm flex flex-wrap items-center justify-center gap-2 text-gray-700 dark:text-white mb-6 sm:mb-0 max-[400px]:mb-8">
          © {currentYear} Ademola Adesina. All rights reserved.
        </p>

        {/* Social Media Section */}
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-[400px]:gap-3 max-[400px]:mt-2">
          {/* GitHub */}
          <li className="flex items-center gap-2">
            <img
              src={github_icon}
              alt="GitHub Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/semiuAdesina"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
            >
              GitHub
            </a>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-2">
            <img
              src={linkedin_icon}
              alt="LinkedIn Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/semiu-ademola-adesina-585141319"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
            >
              LinkedIn
            </a>
          </li>

          {/* Twitter (X) */}
          <li className="flex items-center gap-2">
            <img
              src={x_icon}
              alt="X Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/Damozpixie1"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
            >
              Twitter
            </a>
          </li>

          {/* WhatsApp (✅ Adjusted for Direct Messaging) */}
          <li className="flex items-center gap-2">
            <img
              src={whatsapp_icon}
              alt="WhatsApp Icon"
              className="w-5 sm:w-6 max-[400px]:w-3"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/2348123057607"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-xs sm:text-sm max-[400px]:text-[10px]"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
