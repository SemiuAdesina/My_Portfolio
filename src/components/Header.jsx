import React from "react";
import Typewriter from "react-typing-effect"; // Ensure this library is installed
import pro from "../assets/pro.jpg";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import hand_icon from "../assets/hand_icon.png";
import my_cv from "../assets/My_CV.pdf"; // Import the PDF file

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 morning-bg">
      <img
        src={pro}
        alt="Profile"
        className="rounded-full w-32 h-32 object-cover"
      />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        <Typewriter
          text={[
            "Passionate",
            "Innovative",
            "Solution-Oriented",
            "Adaptable",
          ]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
        />
        &nbsp;I'm Ademola Adesina
        <img src={hand_icon} alt="Hand Icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full-Stack Software Engineer | MERN Stack Specialist | Freelance Expert
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a Full-Stack Software Engineer with over 2 years of experience
        building dynamic, responsive, and scalable web applications. I
        specialize in the MERN stack (MongoDB, Express, React, Node.js) and have
        worked on various freelance projects for clients worldwide through
        Upwork. My expertise includes creating modern e-commerce platforms,
        management systems, and custom APIs to meet unique client needs.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="Arrow Icon" className="w-4" />
        </a>
        <a
          href={my_cv} // Use the imported PDF path
          download="Ademola_Adesina_CV.pdf" // Provide a custom name for the downloaded file
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <img src={download_icon} alt="Download Icon" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
