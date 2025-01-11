import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  // Framer Motion Animation Variants
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      id="contact"
      className="w-full flex items-center justify-center py-10 sm:py-16"
      initial="initial"
      whileInView="whileInView"
      transition="transition"
      variants={fadeIn}
    >
      {/* ✅ Card Container (Reduced Size for Phones) */}
      <motion.div
        className="max-w-md w-[90%] sm:max-w-lg bg-transparent backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl p-6 sm:p-12 transition-all duration-500 hover:shadow-lg dark:hover:shadow-purple-600"
        initial="initial"
        whileInView="whileInView"
        transition="transition"
        variants={fadeIn}
      >
        {/* Heading Section */}
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-center mb-4 text-gray-800 dark:text-white"
          {...fadeIn}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base"
          {...fadeIn}
        >
          Have a question or want to work together? Reach out to me!
        </motion.p>

        {/* Form Section */}
        <motion.form onSubmit={onSubmit} className="space-y-4 sm:space-y-6" {...fadeIn}>
          <input
            type="hidden"
            name="subject"
            value="Ademola Adesina - New Form Submission"
          />

          {/* ✅ Reduced Input Size for Phones */}
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            name="name"
            {...fadeIn}
          />

          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            name="email"
            {...fadeIn}
          />

          <motion.textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            name="message"
            {...fadeIn}
          ></motion.textarea>

          {/* Captcha Section */}
          <motion.div
            className="h-captcha mb-4"
            data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            {...fadeIn}
          ></motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg bg-black text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
            {...fadeIn}
          >
            Send Message
            <img src={right_arrow_white} alt="Arrow Icon" className="w-5" />
          </motion.button>

          {/* Form Result Message */}
          <motion.p
            className="mt-4 text-center text-gray-700 dark:text-white text-sm"
            {...fadeIn}
          >
            {result}
          </motion.p>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
