import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePageGrid from "../components/HomePageGrid";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <>
      <Head>
        <title>Maëlys Cha: Illustrator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-teal-500">
        <Navbar />
      </div>
      <div className="flex flex-col">
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
        <div className="bg-teal-500">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
