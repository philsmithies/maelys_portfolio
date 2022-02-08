import ImageMasonary from "../components/ImageMasonary";
import ContactForm from "../components/ContactForm";
import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import ScrollDownButton from "../components/ScrollDownButton";

const Index = () => {
  const aboutRef = useRef(null);

  const image7 = "/images/portfolio7.jpg";
  const image8 = "/images/portfolio8.jpg";
  const image9 = "/images/portfolio9.jpg";
  const image10 = "/images/portfolio10.jpg";
  const image11 = "/images/portfolio11.jpg";
  const image12 = "/images/portfolio12.jpg";
  const image13 = "/images/portfolio13.jpg";
  const image14 = "/images/portfolio14.jpg";
  const image15 = "/images/portfolio15.jpg";
  const image16 = "/images/portfolio16.jpg";

  const images = [
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

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
    <>
      <div className="flex flex-col">
        <div className="top-[200px] mx-auto flex h-screen w-full justify-center bg-[url('/images/portfolio8.jpg')] bg-cover">
          <ScrollDownButton reference={aboutRef} />
        </div>

        <div
          ref={aboutRef}
          className="mx-auto mt-20 flex h-auto w-11/12 flex-col items-center justify-center md:flex-row md:px-36 "
        >
          <div className="mx-auto flex h-full max-w-sm flex-col items-center justify-center text-center md:w-3/6">
            <h1 className="text-4xl">About Me</h1>
            <p className="px-5 pt-5 text-base">
              Hi, I’m Maëlys. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed pretium nibh a felis porta, vitae faucibus mi varius.
              Aliquam consectetur suscipit malesuada. ✨
            </p>
          </div>
          <div className="mx-auto h-full w-4/6 md:w-3/6">
            <img
              src="/images/aboutme.jpeg"
              alt="about me"
              className="mt-5 md:w-96"
            />
          </div>
        </div>
        <div className="my-40 mx-auto w-full">
          <div className="mx-auto  max-w-6xl px-12 md:mt-0">
            <h1 className="pb-10 text-center text-4xl">My Work</h1>
            <ImageMasonary images={images} />
          </div>
          <div className="mx-auto flex max-w-md flex-col items-center justify-center pt-24 lg:max-w-4xl lg:flex-row">
            <div className="mx-auto flex h-60 w-6/12 flex-col justify-between self-start text-center lg:w-3/12 lg:text-left">
              <h1 className="pt-5 text-4xl">Get in Touch</h1>
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
            <ContactForm />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
