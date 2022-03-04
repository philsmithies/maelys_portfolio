import ContactForm from "../components/ContactForm";
import SocialsBar from "../components/SocialsBar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import groq from "groq";
import client from "../client";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="mx-auto flex h-screen w-4/5 flex-col items-center justify-center text-white md:flex-row ">
        <div>
          <img
            src="/images/aboutme.jpeg"
            alt="about me"
            className="mb-10 w-96"
          />
        </div>
        <div className="flex flex-col md:ml-10 ">
          <img
            src="/images/star.svg"
            alt="about me"
            className="absolute -z-10 ml-10 w-40 self-end"
          />

          <h1 className="font-syne pb-3 text-center text-4xl font-semibold text-black md:text-left">
            Maelys Cha Cha
          </h1>
          <p className="max-w-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
            nibh a felis porta, vitae faucibus mi varius. Proin ornare lobortis
            ex. Aliquam consectetur suscipit malesuada. Sed dignissim nibh non
            felis vehicula cursus a in enim. Nunc varius, mauris eu congue
            aliquam, est ex rutrum sem, id fringilla felis diam sed purus. Donec
            aliquam ipsum et hendrerit fermentum. Aliquam posuere nisl ut ante
            condimentum sagittis. Fusce ut lorem at nibh hendrerit interdum id
            vitae mauris. Vivamus non nisi imperdiet, convallis mauris nec,
            tincidunt purus. Nunc aliquet vel nisi at rutrum. Cras gravida
            convallis justo non eleifend. Nullam tellus mi, varius ut lacus eu,
            lacinia aliquet enim.
            <br />
            <br />
            Phasellus eu tincidunt libero. Integer fermentum nec velit eget
            vulputate. Sed vitae fringilla odio, in semper metus. Aliquam
            suscipit turpis id dolor vulputate, nec blandit dui lacinia.
          </p>
          <img
            src="/images/rainbowblue.svg"
            alt="about me"
            className="absolute -z-10 ml-10 w-40 self-start fill-yellow-100"
          />
        </div>
      </div>
    </>
  );
};
export default About;
