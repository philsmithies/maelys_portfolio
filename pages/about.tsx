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
      <div className="mx-auto flex h-screen w-4/5 flex-col items-center justify-center pt-40 pb-28 text-white md:flex-row ">
        <div className="relative ml-5 h-96 w-72 mt-8 mb-10">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/aboutme.jpeg"
            alt="About Me Profile Photo"
            className="mt-5"
            blurDataURL="KuNcd3WCx,a~jsj@%joMN1"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col md:ml-10 ">
          <div className="absolute -z-10 ml-10 self-end">
            <Image
              src="/icons/star.svg"
              alt="star icon"
              width={80}
              height={80}
            />
          </div>

          <h1 className="font-syne pb-3 text-center text-4xl font-semibold text-black md:text-left">
            Maelys Cha Cha
          </h1>
          <p className="max-w-sm text-black">{websiteText.aboutPage}</p>
          <div className="absolute -z-10 ml-10 mt-20 self-start">
            <Image
              src="/icons/rainbowblue.svg"
              alt="rainbow icon"
              width={80}
              height={80}
            />
          </div>
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
