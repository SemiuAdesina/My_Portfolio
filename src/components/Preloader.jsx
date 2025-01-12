import React from "react";
import { motion } from "framer-motion";
import Damoz_re from "../assets/Damoz_re.png";

const Preloader = ({ setLoadingComplete }) => {
  // Animation Variants
  const preloaderAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  };

  // Blinking Effect (Looping Fade)
  const blinkingAnimation = {
    visible: { opacity: [1, 0.3, 1], transition: { duration: 0.8, repeat: Infinity } }
  };

  // Auto-redirect after animation
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 3500); // Adjust the delay for the effect duration
    return () => clearTimeout(timeout);
  }, [setLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white to-red-100 z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={preloaderAnimation}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Logo Animation */}
      <motion.img
        src={Damoz_re}
        alt="Damoz Logo"
        className="w-36 sm:w-48"
        initial="hidden"
        animate="visible"
        variants={blinkingAnimation} // Blinking effect added here
      />
    </motion.div>
  );
};

export default Preloader;


