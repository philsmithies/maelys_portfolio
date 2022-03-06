import { useRef } from "react";
import ContactForm from "../components/ContactForm";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollTopButton from "../components/ScrollTopButton";
import AboutMe from "../components/Home/AboutMe";
import MyWork from "../components/Home/MyWork";
import GetInTouch from "../components/Home/GetInTouch";
import client from "../client";
import groq from "groq";
import type { PageProps } from "./types";

const Index = ({ gallery, websiteText }: PageProps) => {
  const aboutRef = useRef(null);
  return (
    <>
      <div className="flex flex-col">
        <div className="top-[200px] mx-auto flex h-screen w-full justify-center bg-[url('/images/homepage2.jpg')] bg-cover">
          <ScrollDownButton reference={aboutRef} />
        </div>
        <div ref={aboutRef} className="mx-auto">
          <AboutMe aboutText={websiteText["aboutHome"]} />
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

export const getStaticProps = async () => {
  const gallery = await client.fetch(groq`
  *[_type == "gallery" && title == 'Home']
`);

  const websiteText = await client.fetch(groq`
  *[_type == "textContent"][0]
`);

  return {
    props: {
      gallery: gallery,
      websiteText: websiteText,
    },
    revalidate: 1,
  };
};

export default Index;
