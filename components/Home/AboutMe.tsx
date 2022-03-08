import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Wave from "../Wave";
import useHasBeenViewed from "../../utils/useHasBeenViewed";

const AboutMe = ({ aboutText }): JSX.Element => {
  // percentage of parent in view before trigger
  const [hasBeenViewed, ref] = useHasBeenViewed();
  const animation = useAnimation();

  useEffect(() => {
    console.log("in view is ", hasBeenViewed);
    if (hasBeenViewed) {
      animation.start({
        strokeOpacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
          duration: 3,
          ease: "easeOut",
        },
      });
    } else {
      animation.start({ strokeOpacity: 0, pathLength: 0, pathOffset: 1 });
    }
  }, [hasBeenViewed]);

  return (
    <div
      className="mt-20 flex h-auto w-11/12 flex-col items-center justify-center md:flex-row md:px-36 "
      ref={ref}
    >
      <div className="flex h-full max-w-sm flex-col items-center justify-center text-center md:w-3/6">
        <h1 className="font-syne text-4xl font-semibold">About Me</h1>
        <p className="font-syne px-5 pt-5 text-base">
          The text on home is {aboutText}
        </p>
        <img
          src="/icons/rainbowblue.svg"
          alt="about me"
          className="absolute -z-10 mt-36 w-40 self-start fill-yellow-100"
        />
        <img
          src="/icons/lightstar.svg"
          alt="about me"
          className="absolute -z-10 mt-16 w-20 self-start fill-yellow-100"
        />
      </div>
      <div className="ml-5 h-full w-4/6">
        <img
          src="/images/aboutme.jpeg"
          alt="about me"
          className="mt-5 md:w-96"
        />
      </div>
      <div className="absolute -z-10 h-fit w-full">
        <motion.div className="w-full rotate-90">
          <svg
            viewBox="0 0 1440 363"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
              stroke="#000"
              animate={animation}
              strokeOpacity="1"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
