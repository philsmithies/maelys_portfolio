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
          </div>
          <ScrollTopButton />
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
