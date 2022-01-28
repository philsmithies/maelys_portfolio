import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Maëlys Cha: Illustrator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="bg-teal-500">
          <Navbar />
        </div>
        <div className="h-screen bg-slate-600 pt-10 flex flex-col items-center">
          <div>
            <h1 className="pb-5">Contact Me</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
