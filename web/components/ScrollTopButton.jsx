import { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const { scrollY } = useViewportScroll();

  const checkScrollTop = () => {
    if (scrollY?.current > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => checkScrollTop());
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };
  return (
    <motion.div
      variants={variants}
      animate={showScroll ? "visible" : "hidden"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <FaArrowCircleUp
        onClick={scrollTop}
        className="fixed bottom-3 right-1 h-10 w-10 fill-orange-400 hover:cursor-pointer md:right-10 md:bottom-10"
      />
    </motion.div>
  );
};

export default ScrollTopButton;
