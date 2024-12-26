import React from 'react';
import Damoz_nighty from '../assets/Damoz_nighty.png';
import Damoz_re from '../assets/Damoz_re.png';
import mail_icon from '../assets/mail_icon.png';
import mail_icon_dark from '../assets/mail_icon_dark.png';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={Damoz_re} alt="Damoz Logo" className="w-36 mx-auto mb-2 dark:hidden" />
        <img src={Damoz_nighty} alt="Damoz Logo Dark" className="w-36 mx-auto mb-2 hidden dark:block" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mail_icon} alt="Mail Icon" className="w-6 dark:hidden" />
          <img src={mail_icon_dark} alt="Mail Icon Dark" className="w-6 hidden dark:block" />
          ademolaadesinadev@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="flex flex-wrap items-center justify-center text-center gap-2">
          © {currentYear} Ademola Adesina. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/semiuAdesina">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/semiu-ademola-adesina-585141319?trk=contact-info">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://x.com/Damozpixie1">
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/c/2348123057607">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
