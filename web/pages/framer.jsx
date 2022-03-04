import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Framer = () => {
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log("in view is ", inView);
  }, []);
  return (
    <div className="h-screen w-full" ref={ref}>
      <div className="h-screen bg-red-400">asd</div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: "1", bounce: "0.3" }}
        className="h-screen bg-yellow-400"
      >
        asd
      </motion.div>
    </div>
  );
};

export default Framer;
