import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="h-screen bg-slate-600 flex flex-col items-center justify-center">
        <div>
          <h1 className="pb-5 text-5xl text-white">Contact Me</h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
