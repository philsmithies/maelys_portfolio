import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <div className="bg-teal-500">
        <Navbar />
      </div>

      <div className="flex flex-col h-screen">
        <div className="w-full h-4/6 bg-pink-600">
          <h1 className="text-3xl pl-40 pt-40">Big Heart</h1>
          <h1 className="text-3xl pl-20">Big Drawings</h1>
        </div>
        <div className="bg-black"></div>
        {/* <div className="w-80 h-80 relative">
          <Image src="/images/portfolio1.jpg" layout="fill" />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Index;
