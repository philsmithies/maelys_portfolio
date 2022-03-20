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
      <div className="mx-auto flex h-max w-4/5 flex-col items-center justify-center pt-40 pb-28 text-white md:flex-row ">
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
            Maëlys Chay
          </h1>
          <div className="max-w-sm text-black">
            <p> Bonjour! My name is Maëlys Chay.</p>
            <p>
              I am a French Freelance Illustrator, travel and film photography
              enthusiast based in Paris & in the south of France.
            </p>
            <br />
            <p>
              My work centers around colourful illustrations, often featuring in
              one way or another nature, womanhood, still life and a punchy
              touch.
            </p>
            <br /> I work mainly digitally but also love to draw and paint on
            paper with watercolours, gouache, acrylic and/ or pencils. <br />
            <br />I share my work on Instagram @
            <Link href="https://www.instagram.com/maelyschay" passHref>
              <span className="underline hover:text-orange-500 hover:cursor-pointer transition-colors">
                maelyschay
              </span>
            </Link>
            . ☺
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
