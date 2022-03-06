import React from "react";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    // <svg viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <motion.path
    //     d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
    //     stroke="#000"
    //     // initial={{ strokeOpacity: 0, pathLength: 0, pathOffset: 1 }}
    //     // animate={{ strokeOpacity: 1, pathLength: 1, pathOffset: 0 }}
    //     // transition={{ duration: 2, ease: "easeInOut" }}
    //     strokeOpacity="1"
    //     strokeWidth="1"
    //   />
    // </svg>
    <svg
      width="75"
      height="335"
      viewBox="0 0 75 335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74 1C74 11.5258 74.6677 23.22 70.2222 33C65.8423 42.6358 55.3739 51.5749 46.6111 57.3333C29.1283 68.822 15.7713 87.0502 8.61111 106.556C2.11696 124.247 1 144.592 1 163.222C1 180.104 1.83636 197.423 5.77778 213.889C8.47698 225.166 12.557 236.128 15.5556 247.333C23.7877 278.096 39.9516 305.903 54 334"
        stroke="black"
        stroke-linecap="square"
      />
    </svg>
  );
};

export default Wave;
