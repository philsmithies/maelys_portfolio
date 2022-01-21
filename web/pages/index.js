import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePageGrid from "../components/HomePageGrid";

const Index = () => {
  return (
    <>
      <Head>
        <title>Maëlys Chavernac</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-teal-500">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="w-full h-screen bg-teal-600">
          <h1 className="text-3xl pl-40 pt-40">Big Heart</h1>
          <h1 className="text-3xl pl-20">Big Drawings</h1>
          <div>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                alt="Mountains"
                src="/images/portfolio8.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <HomePageGrid />
        <div className="bg-teal-500">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
