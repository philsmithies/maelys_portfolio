import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePageGrid from "../components/HomePageGrid";
import Motion from "../components/Motion";

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
        <div className="h-screen bg-slate-600 flex items-center justify-center">
          <div>
            <img src="/images/aboutme.jpeg" alt="about me" className="w-96" />
          </div>
          <div className="max-w-sm ml-10 flex flex-col">
            <h1 className="text-4xl pb-3">Maelys Cha Cha</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium nibh a felis porta, vitae faucibus mi varius. Proin ornare
              lobortis ex. Aliquam consectetur suscipit malesuada. Sed dignissim
              nibh non felis vehicula cursus a in enim. Nunc varius, mauris eu
              congue aliquam, est ex rutrum sem, id fringilla felis diam sed
              purus. Donec aliquam ipsum et hendrerit fermentum. Aliquam posuere
              nisl ut ante condimentum sagittis. Fusce ut lorem at nibh
              hendrerit interdum id vitae mauris. Vivamus non nisi imperdiet,
              convallis mauris nec, tincidunt purus. Nunc aliquet vel nisi at
              rutrum. Cras gravida convallis justo non eleifend. Nullam tellus
              mi, varius ut lacus eu, lacinia aliquet enim. Phasellus eu
              tincidunt libero. Integer fermentum nec velit eget vulputate. Sed
              vitae fringilla odio, in semper metus. Aliquam suscipit turpis id
              dolor vulputate, nec blandit dui lacinia.
            </p>
            <a href="/contact">
              <button
                class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-44 mt-5"
                type="button"
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
