import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const ImageModal = () => {
  const [isOpen, setOpen] = useState(false);

  // useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  return (
    <div className={`image-container ${isOpen ? "open" : ""}`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        src="/images/portfolio1.jpg"
        alt="modal test"
        onClick={() => setOpen(!isOpen)}
        layout
        transition={transition}
      />
    </div>
  );
};

export default ImageModal;
