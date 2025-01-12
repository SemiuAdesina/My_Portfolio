import React, { useEffect, useState } from "react";
import right_arrow_white from "../assets/right-arrow-white.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending message..."); // Show "Sending" immediately

    const hCaptcha = event.target.querySelector(
      'textarea[name=h-captcha-response]'
    )?.value;

    if (!hCaptcha) {
      setResult("Please complete the captcha.");
      return;
    }

    const formData = new FormData(event.target);

    try {
      const res = await fetch("https://formspree.io/f/xblldkpv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
      console.error("Error sending form data: ", error);
    }
  };

  useEffect(() => {
    const loadCaptchaScript = () => {
      if (!document.querySelector('script[src*="hcaptcha.com"]')) {
        const script = document.createElement("script");
        script.src = "https://js.hcaptcha.com/1/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    loadCaptchaScript();
  }, []);

  return (
    <div id="contact" className="w-full flex items-center justify-center py-10 sm:py-16">
      {/* ✅ Card Container (Animation Removed) */}
      <div className="max-w-md w-[90%] sm:max-w-lg bg-transparent backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl p-6 sm:p-12 transition-all duration-500 hover:shadow-lg dark:hover:shadow-purple-600">
        {/* Heading Section */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
          Have a question or want to work together? Reach out to me!
        </p>

        {/* Form Section */}
        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          <input
            type="hidden"
            name="subject"
            value="Ademola Adesina - New Form Submission"
          />

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            name="name"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            name="email"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            name="message"
          ></textarea>

          {/* ✅ Updated Captcha Section for Phones */}
          <div
            className="h-captcha mb-4 flex justify-center items-center max-w-xs sm:max-w-full mx-auto scale-[0.85] sm:scale-100"
            data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          ></div>

          {/* ✅ Send Button with Gradient */}
          <button
            type="submit"
            className="w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[rgb(255,215,0)] to-red-500 hover:bg-gradient-to-r hover:from-[rgb(255,215,0)] hover:to-red-500 hover:scale-105 transition-all duration-500"
          >
            Send Message
            <img src={right_arrow_white} alt="Arrow Icon" className="w-5" />
          </button>

          {/* Form Result Message */}
          <p className="mt-4 text-center text-gray-700 dark:text-white text-sm">
            {result}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;





