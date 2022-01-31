import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePageGrid from "../components/HomePageGrid";
import FadeInImage from "../components/FadeInImage";

const Index = () => {
  return (
    <div className="flex flex-col relative">
      <div className="w-8/12 text-2xl text-center mx-auto p-10 my-10">
        Hi, I’m Maëlys. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed pretium nibh a felis porta, vitae faucibus mi varius. Aliquam
        consectetur suscipit malesuada. ✨
      </div>
      <div className="w-full h-screen bg-cover bg-[url('/images/portfolio8.jpg')] top-[200px]">
        <h1 className="text-6xl pl-40 pt-40 font-serif text-white">
          Big Heart
        </h1>
        <h1 className="text-6xl pl-20 font-serif">Big Drawings</h1>
      </div>
      {/* <FadeInImage /> */}
      <div className="w-full my-40 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl pb-10">My Work</h1>
          <HomePageGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
