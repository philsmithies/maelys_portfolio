import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePageGrid from "../components/HomePageGrid";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <div className="flex flex-col">
      <div className="w-8/12 text-2xl text-center mx-auto p-10">
        Hi, I’m Maelys. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed pretium nibh a felis porta, vitae faucibus mi varius. Aliquam
        consectetur suscipit malesuada. ✨
      </div>
      <div className="w-full h-screen bg-cover bg-[url('/images/portfolio8.jpg')] top-[200px]">
        <h1 className="text-6xl pl-40 pt-40 font-serif text-white">
          Big Heart
        </h1>
        <h1 className="text-6xl pl-20 font-serif">Big Drawings</h1>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <HomePageGrid />
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
