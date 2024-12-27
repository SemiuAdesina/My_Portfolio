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
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={Damoz_re} alt="Damoz Logo" className="w-28 mx-auto mb-2 dark:hidden" />
        <img src={Damoz_nighty} alt="Damoz Logo Dark" className="w-28 mx-auto mb-2 hidden dark:block" />

        <div className="flex flex-col items-center gap-2 mx-auto text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <img src={mail_icon} alt="Mail Icon" className="w-5 sm:w-6 dark:hidden" />
            <img src={mail_icon_dark} alt="Mail Icon Dark" className="w-5 sm:w-6 hidden dark:block" />
            <span className="text-gray-700 dark:text-white text-center">ademolaadesinadev@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-6 sm:mx-[10%] mt-12 py-6">
        <p className="text-sm sm:text-base flex flex-wrap items-center justify-center gap-2 text-gray-700 dark:text-white">
          © {currentYear} Ademola Adesina. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center gap-4 sm:gap-10 justify-center mt-4 sm:mt-0">
          <li className="flex items-center gap-2">
            <img src={github_icon} alt="GitHub Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/semiuAdesina"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-sm sm:text-base"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-2">
            <img src={linkedin_icon} alt="LinkedIn Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/semiu-ademola-adesina-585141319?trk=contact-info"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-sm sm:text-base"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <img src={x_icon} alt="X Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/Damozpixie1"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-sm sm:text-base"
            >
              Twitter
            </a>
          </li>
          <li className="flex items-center gap-2">
            <img src={whatsapp_icon} alt="WhatsApp Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/c/2348123057607"
              className="text-gray-700 dark:text-white hover:text-blue-500 text-sm sm:text-base"
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
