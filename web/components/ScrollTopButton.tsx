import { useState, useEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTopButton = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState(false);
  const { scrollY } = useViewportScroll();
  const animation = useAnimation();

  const checkScrollTop = () => {
    if (scrollY?.get() > 250) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else {
      animation.start({ opacity: 0 });
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => checkScrollTop());
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div animate={animation}>
      <FaArrowCircleUp
        onClick={scrollTop}
        className="fixed bottom-3 right-1 h-10 w-10 fill-orange-400 hover:cursor-pointer md:right-10 md:bottom-10"
      />
    </motion.div>
  );
};

export default ScrollTopButton;
