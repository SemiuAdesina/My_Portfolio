import React from "react";
import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! Explore a curated selection of projects
        highlighting my expertise in branding, graphic design, and UI/UX design.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('./assets/brand_project.jpeg')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Brand project</h2>
              <p className="text-sm text-gray-700">Graphic Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url('./assets/brand_project2.jpeg')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Brand Project</h2>
              <p className="text-sm text-gray-700">Graphic Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url('./assets/meuve_ride.jpeg')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Meuve Ride App</h2>
              <p className="text-sm text-gray-700">WUI/UX Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url('./assets/resolve_mental.jpeg')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Resolve Mental App</h2>
              <p className="text-sm text-gray-700">UI/UX Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://drive.google.com/drive/folders/1QIpME9CD6OpLXvmiiyWpQppy9Gp_opCC?usp=sharing"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
        <img
          src={right_arrow_blod_dark}
          alt=""
          className="w-4 hidden dark:block"
        />
      </a>

      <div className="flex justify-center gap-8 my-20">
        <a
          href="https://dribbble.com/Akinpelu_Ibrahim"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Show Dribbble
        </a>

        <a
          href="https://www.behance.net/ibrahimakinpelu01"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Show Behance
        </a>
      </div>
    </div>
  );
};

export default Work;
