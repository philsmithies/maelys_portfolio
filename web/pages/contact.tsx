import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col justify-center py-24 md:flex-row">
      <div className="mx-auto flex h-60 w-4/12 flex-col justify-between self-center">
        <h1 className="pt-5 text-center text-4xl md:text-left">Get in Touch</h1>
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
      <div id="contact" className="mx-auto max-w-md self-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
