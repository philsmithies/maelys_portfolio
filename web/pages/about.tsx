import ContactForm from "../components/ContactForm";
import SocialsBar from "../components/SocialsBar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="mx-auto flex h-screen flex-col items-center justify-center text-white md:flex-row ">
        <div>
          <img
            src="/images/aboutme.jpeg"
            alt="about me"
            className="mb-10 w-96"
          />
        </div>
        <div className="flex max-w-sm flex-col md:ml-10">
          <h1 className="pb-3 text-center text-4xl text-black md:text-left">
            Maelys Cha Cha
          </h1>
          <p className="text-black">
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
        </div>
      </div>
    </>
  );
};

export default About;
