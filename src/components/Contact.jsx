import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import right_arrow_white from "../assets/right-arrow-white.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const hCaptcha = event.target.querySelector(
      'textarea[name=h-captcha-response]'
    ).value;
    if (!hCaptcha) {
      setResult("Please fill out the captcha field");
      return;
    }
    setResult("Sending...");
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

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrc;
      document.body.appendChild(script);
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);

  // Framer Motion Variants
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
      initial="initial"
      whileInView="whileInView"
      transition="transition"
      variants={fadeIn}
    >
      {/* Heading Section */}
      <motion.h4 className="text-center mb-2 text-lg font-Ovo" {...fadeIn}>
        Connect with me
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo" {...fadeIn}>
        Get in touch
      </motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo" {...fadeIn}>
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      {/* Form Section */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        {...fadeIn}
      >
        <input
          type="hidden"
          name="subject"
          value="Ademola Adesina - New Form Submission"
        />

        {/* Input Fields */}
        <motion.div className="grid grid-cols-auto gap-6 mt-10 mb-8" {...fadeIn}>
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-transparent rounded-md bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400 text-black focus:ring focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-transparent rounded-md bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400 text-black focus:ring focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
            required
            name="email"
          />
        </motion.div>

        {/* Textarea Field */}
        <motion.textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-transparent rounded-md bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400 text-black focus:ring focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500 mb-6"
          required
          name="message"
          {...fadeIn}
        ></motion.textarea>

        {/* Captcha Section */}
        <motion.div
          className="h-captcha mb-6 max-w-full"
          data-captcha="true"
          data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          {...fadeIn}
        ></motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          {...fadeIn}
        >
          Submit now
          <img src={right_arrow_white} alt="Arrow Icon" className="w-4" />
        </motion.button>

        {/* Form Result Message */}
        <motion.p className="mt-4 text-center" {...fadeIn}>
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
