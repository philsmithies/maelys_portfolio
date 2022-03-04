import { useRef } from "react";
import ContactForm from "../components/ContactForm";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollTopButton from "../components/ScrollTopButton";
import AboutMe from "../components/Index/AboutMe";
import MyWork from "../components/Index/MyWork";
import GetInTouch from "../components/Index/GetInTouch";
import { NextPage } from "next/types";
import client from "../client";
import groq from "groq";
import Posts from "./types";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Index: NextPage = ({ gallery }) => {
  // percentage of parent in view before trigger
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    console.log("in view is ", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  const aboutRef = useRef(null);
  return (
    <>
      <div className="flex flex-col">
        <div className="top-[200px] mx-auto flex h-screen w-full justify-center bg-[url('/images/homepage2.jpg')] bg-cover">
          <ScrollDownButton reference={aboutRef} />
        </div>
        <div ref={aboutRef} className="mx-auto">
          <AboutMe />
        </div>
        <div className="my-40 mx-auto w-full">
          <MyWork gallery={gallery} />
          <div className="mx-auto flex flex-col items-center justify-center pt-24 lg:max-w-4xl lg:flex-row">
            <GetInTouch />
            <div className="max-w-xl">
              <ContactForm />
            </div>
            <div className="h-screen w-full" ref={ref}>
              <motion.div
                animate={animation}
                className="h-screen bg-yellow-400"
              >
                asd
              </motion.div>
            </div>
            <ScrollTopButton />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const gallery = await client.fetch(groq`
      *[_type == "gallery" && title == 'Home']
    `);
  return {
    props: {
      gallery,
    },
  };
}

export default Index;
