import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div
      className="flex h-full flex-col items-center py-24 mx-auto
        max-w-md md:max-w-lg lg:max-w-4xl"
    >
      <div className="w-5/6">
        <h1 className="font-syne mt-32 mb-10 text-4xl font-bold">Hello ☺</h1>
        <p>Thank you so much for being here!</p>
        <br />
        <p>
          Do you want to work or collaborate with me? Please tell me more about
          your project by writing to me here:{" "}
          <Link href="mailto:maelyschay@gmail.com" passHref>
            <span className="underline hover:text-orange-500 hover:cursor-pointer transition-colors">
              maelyschay@gmail.com
            </span>
          </Link>
        </p>
        <br />
        <p>
          You can also find me on Instagram @
          <Link href="https://www.instagram.com/maelyschay/" passHref>
            <span className="underline hover:text-orange-500 hover:cursor-pointer transition-colors">
              maelyschay
            </span>
          </Link>
          . Hope you have a great day!
        </p>
      </div>

      <hr className="border-half my-10 w-5/6 border-black" />
      <div className="flex w-5/6 justify-center md:justify-start">
        <div className="">
          <p className="font-syne text-lg font-bold">Email:</p>
          <p className="mb-3 text-lg">maelyschay@gmail.com</p>
        </div>
        <div className="ml-6 pb-10">
          <p className="font-syne text-lg font-bold">Socials:</p>
          <div className="mt-1 flex">
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
      </div>
      <div className="absolute -z-10 w-10 lg:w-16 fill-yellow-100 self-end mt-96 md:mt-72 mr-28">
        <Image
          layout="responsive"
          src="/icons/lightstar.svg"
          alt="about me"
          width={80}
          height={80}
        />
      </div>
      <div className="absolute -z-10 md:ml-3 mt-36 self-center md:self-start">
        <Image
          src="/icons/rainbowblue.svg"
          alt="rainbow icon"
          width={40}
          height={40}
        />
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
