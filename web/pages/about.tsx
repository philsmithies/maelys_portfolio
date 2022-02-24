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
      <div className="mx-auto flex flex-col items-center justify-center pt-24 text-white md:flex-row md:pt-48">
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
      <div className="mx-auto flex max-w-4xl flex-col py-24 md:flex-row">
        <div className="mx-auto flex h-60 w-4/12 flex-col justify-between self-start">
          <h1 className="pt-5 text-center text-4xl md:text-left">
            Get in Touch
          </h1>
          <div className="text-center md:mb-20 md:text-left">
            <p className="mb-3 text-lg">maelyschay@gmail.com</p>
            <p className="text-lg">France</p>
          </div>
          <div className="flex justify-center pb-10 md:justify-start">
            <div className="mr-2">
              <Link href="mailto:greencatmoon@gmail.com">
                <Image
                  src="/icons/email.svg"
                  className="hover:cursor-pointer"
                  height={18}
                  width={18}
                />
              </Link>
            </div>
            <div className="md:mr-2">
              <Link href="https://www.instagram.com/maelyschay">
                <Image
                  src="/icons/instagram.svg"
                  className="hover:cursor-pointer"
                  height={18}
                  width={18}
                />
              </Link>
            </div>
          </div>
        </div>
        <div id="contact" className="mx-auto max-w-md">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default About;
