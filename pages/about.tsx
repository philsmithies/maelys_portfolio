import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import groq from "groq";
import { getClient } from "../utils/sanity";

interface WebsiteText {
  websiteText: {
    aboutHome: string;
    aboutPage: string;
    illustrationIntro: string;
  };
}

const About: NextPage<WebsiteText> = ({ websiteText }) => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="mx-auto flex h-full w-4/5 flex-col items-center justify-center pt-40 pb-28 text-white md:flex-row ">
        <div className="mb-10 w-96">
          <Image
            unsized
            alt="about me"
            src="/images/aboutme.jpeg"
            // blurDataURL="data:..." automatically provided
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col md:ml-10 ">
          <img
            src="/icons/star.svg"
            alt="about me"
            className="absolute -z-10 ml-10 w-40 self-end"
          />

          <h1 className="font-syne pb-3 text-center text-4xl font-semibold text-black md:text-left">
            Maelys Cha Cha
          </h1>
          <p className="max-w-sm text-black">{websiteText.aboutPage}</p>
          <img
            src="/icons/rainbowblue.svg"
            alt="about me"
            className="absolute -z-10 ml-10 w-40 self-start fill-yellow-100"
          />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const websiteText = await getClient(true).fetch(groq`
  *[_type == "textContent"][0]
`);

  return {
    props: {
      websiteText,
    },
  };
};

export default About;