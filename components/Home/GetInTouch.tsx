import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Wave from "../Wave";
import useHasBeenViewed from "../../utils/useHasBeenViewed";

const GetInTouch = (): JSX.Element => {
  const [hasBeenViewed, ref] = useHasBeenViewed();
  const animation = useAnimation();

  useEffect(() => {
    console.log("in view is ", hasBeenViewed);
    if (hasBeenViewed) {
      animation.start({
        rotate: 260,
        transition: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    } else {
      animation.start({ rotate: 0 });
    }
  }, [hasBeenViewed]);

  return (
    <div
      className="mx-auto flex h-60 w-6/12 flex-col justify-between self-start text-center lg:w-3/12 lg:text-left"
      ref={ref}
    >
      <motion.img
        src="/icons/lightstar.svg"
        alt="about me"
        animate={animation}
        className="absolute -z-20 mt-32 w-12 self-start fill-yellow-100 md:mt-40 "
      />
      <h1 className="font-syne pt-5 text-4xl font-semibold">Get in touch</h1>
      <div className="mb-20">
        <a
          href="mailto:maelyschay@gmail.com"
          className="mb-3 text-lg transition-colors hover:text-orange-400"
        >
          maelyschay@gmail.com
        </a>

        <p className="text-lg">France</p>
      </div>
    </div>
  );
};

export default GetInTouch;
