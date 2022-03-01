import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col py-24">
      <div className="bg-red-400">
        <h1 className="font-syne text-4xl font-semibold">Hello :)</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
        nibh a felis porta, vitae faucibus mi varius.
        <br />
        Proin ornare lobortis ex. Aliquam consectetur suscipit malesuada. Sed
        dignissim nibh non felis vehicula cursus a in enim. Nunc varius, mauris
        eu congue aliquam, est ex rutrum sem, id fringilla felis diam sed purus.
        <br />
        Donec aliquam ipsum et hendrerit fermentum. Aliquam posuere nisl ut ante
        condimentum sag?
      </div>
      <hr className="my-20 w-2/4 self-center border border-black" />
      <div className="flex h-60 flex-col justify-between bg-yellow-400">
        <p className="mb-3 text-lg">maelyschay@gmail.com</p>
        <p className="text-lg">France</p>
        <div className="flex justify-center pb-10">
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
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
