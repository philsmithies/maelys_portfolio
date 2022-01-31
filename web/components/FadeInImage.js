import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const FadeInImage = (props) => {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);
  return (
    <div className="h-fit flex items-center flex-col-dense mx-auto pt-10 w-screen">
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1 className="mt-20 lg:mt-0 mb-10 lg:ml-20 text-3xl font-serif">
          My Work
        </h1>
        <div class="container space-y-2 grid grid-cols-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 lg:max-w-max lg:pr-10 lg:pl-10">
          <div
            style={{ width: "400px", height: "500px" }}
            className="rounded hover:opacity-50 hover:cursor-pointer relative row-span-2"
          >
            <Image
              src={"/images/portfolio2.jpg"}
              layout="fill"
              objectFit="cover"
              onLoad={() => setLoaded(true)}
            />
          </div>

          <div
            style={{ width: "400px", height: "400px" }}
            className="rounded hover:opacity-50 hover:cursor-pointer relative"
          >
            <Image
              src={"/images/portfolio3.jpg"}
              layout="fill"
              objectFit="cover"
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div
            style={{ width: "400px", height: "500px" }}
            className="rounded hover:opacity-50 hover:cursor-pointer relative"
          >
            <Image
              src={"/images/portfolio4.jpg"}
              layout="fill"
              objectFit="cover"
              onLoad={() => setLoaded(true)}
            />
          </div>

          <div
            style={{ width: "400px", height: "500px" }}
            className="rounded hover:opacity-50 hover:cursor-pointer relative"
          >
            <Image
              src={"/images/portfolio7.jpg"}
              layout="fill"
              objectFit="cover"
              onLoad={() => setLoaded(true)}
            />
          </div>

          <div
            style={{ width: "400px", height: "400px" }}
            className="rounded hover:opacity-50 hover:cursor-pointer relative"
          >
            <Image
              src={"/images/portfolio8.jpg"}
              layout="fill"
              objectFit="cover"
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div
            style={{ width: "400px", height: "500px" }}
            className="rounded hover:opacity-50 hover:cursor-pointer relative"
          >
            <Image
              src={"/images/portfolio9.jpg"}
              layout="fill"
              objectFit="cover"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FadeInImage;
