import { useRef } from "react";
import ContactForm from "../components/ContactForm";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollTopButton from "../components/ScrollTopButton";
import AboutMe from "../components/Home/AboutMe";
import MyWork from "../components/Home/MyWork";
import GetInTouch from "../components/Home/GetInTouch";
import { getClient } from "../utils/sanity";
import Image from "next/dist/client/image";
import groq from "groq";
import type { PageProps } from "../types";

const Index = ({ gallery, websiteText }: PageProps) => {
  const aboutRef = useRef(null);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex h-screen w-full relative justify-center z-10">
          {/* bg-[url('/images/homepage2.jpg')] */}
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/homepage2.jpg"
            alt="Picture of the author"
            blurDataURL="LKR1qu3WtPIo~XV@G[kWyD@@-VtR"
            placeholder="blur"
          />
          <div className="absolute self-end mx-auto">
            <ScrollDownButton reference={aboutRef} />
          </div>
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

export const getServerSideProps = async () => {
  const gallery = await getClient(true).fetch(groq`
  *[_type == "gallery" && title == 'Home']
`);

  const websiteText = await getClient(true).fetch(groq`
  *[_type == "textContent"][0]
`);

  return {
    props: {
      gallery,
      websiteText,
    },
  };
};

export default Index;
