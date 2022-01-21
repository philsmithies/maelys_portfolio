import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePageGrid from "../components/HomePageGrid";

const About = () => {
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

        <h1>About</h1>
      </div>
    </>
  );
};

export default About;
