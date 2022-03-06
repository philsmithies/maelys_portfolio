import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const ScrollButton = ({ reference }): JSX.Element => {
  const [scrollButtonVisible, setScrollButtonVisible] = useState(true);
  const animation = useAnimation();

  const executeScroll = () => {
    reference.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setScrollButtonVisible(false);
  };

  return (
    <motion.button
      transition={{ duration: 0.4, yoyo: Infinity, ease: "easeOut" }}
      animate={{
        y: ["10%", "-10%"],
      }}
      className="mb-5 self-end"
    >
      <FaArrowCircleDown
        className={`mb-5 h-9 w-9 fill-orange-400 transition-all duration-500 ease-in-out ${
          scrollButtonVisible ? "flex" : "hidden"
        }`}
        onClick={executeScroll}
      />
    </motion.button>
  );
};

export default ScrollButton;
