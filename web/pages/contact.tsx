import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div
      className="flex h-full max-w-sm flex-col items-center py-24 sm:mx-auto
  md:max-w-md lg:max-w-4xl"
    >
      <div className="w-5/6">
        <h1 className="font-syne mt-32 mb-10 text-4xl font-bold">Hello ☺</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          nibh a felis porta, vitae faucibus mi varius.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          nibh a felis porta, vitae faucibus mi varius.nibh a felis porta, vitae
          faucibus mi varius.nibh a felis porta, vitae faucibus mi varius.nibh a
          felis porta, vitae faucibus mi varius.nibh a felis porta, vitae
          faucibus mi varius.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          nibh a felis porta, vitae faucibus mi varius.
        </p>
      </div>
      <hr className="border-half my-10 w-5/6 border-black" />
      <div className="flex w-5/6 justify-center md:justify-start">
        <div className="">
          <p className="font-syne text-lg font-bold">Email:</p>
          <p className="mb-3 text-lg">maelyschay@gmail.com</p>
        </div>
        <div className="ml-6 pb-10">
          <p className="font-syne text-lg font-bold">Social Networks:</p>
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
      <ContactForm />
    </div>
  );
};

export default Contact;
