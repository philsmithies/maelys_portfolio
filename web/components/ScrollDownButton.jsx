import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const ScrollButton = ({ reference }) => {
  const [scrollButtonVisible, setScrollButtonVisible] = useState(true);

  const executeScroll = () => {
    reference.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setScrollButtonVisible(false);
  };

  return (
    <button className="self-end">
      <FaArrowCircleDown
        className={`mb-5 h-9 w-9 animate-bounce fill-orange-400 transition-all duration-500 ease-in-out ${
          scrollButtonVisible ? "flex" : "hidden"
        }`}
        onClick={executeScroll}
      />
    </button>
  );
};

export default ScrollButton;
