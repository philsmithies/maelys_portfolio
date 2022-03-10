import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import useHasBeenViewed from "../../utils/useHasBeenViewed";

interface AboutText {
  aboutText: string;
}

const AboutMe = ({ aboutText }: AboutText): JSX.Element => {
  // percentage of parent in view before trigger
  const [hasBeenViewed, ref] = useHasBeenViewed();
  const animation = useAnimation();

  useEffect(() => {
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
      className="mt-36 flex w-11/12 flex-col items-center justify-center md:flex-row mx-auto "
      ref={ref}
    >
      <div className="flex h-full max-w-sm flex-col items-center justify-center text-center md:w-3/6 mx">
        <h1 className="font-syne text-4xl font-semibold">About Me</h1>
        <p className="font-syne px-5 pt-5 text-base">
          The text on home is {aboutText}
        </p>
        <div className="absolute -z-10 sm:w-20 mt-20 md:w-20 self-start fill-yellow-100">
          <Image
            layout="responsive"
            src="/icons/rainbowblue.svg"
            alt="about me"
            width={160}
            height={100}
            className=""
          />
          <Image
            layout="responsive"
            src="/icons/lightstar.svg"
            alt="about me"
            width={80}
            height={80}
            className="absolute -z-10 mt-36 w-40 self-start fill-yellow-100"
          />
        </div>
      </div>
      <div className="relative ml-5 h-96 w-72 mt-8">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/aboutme.jpeg"
          alt="Picture of the author"
          className="mt-5"
          blurDataURL="KuNcd3WCx,a~jsj@%joMN1"
          placeholder="blur"
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
