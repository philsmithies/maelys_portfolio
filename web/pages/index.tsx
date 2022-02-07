import HomePageGrid from "../components/HomePageGrid";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
``;

const Index = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col">
        <div className="top-[200px] mx-auto h-screen w-full bg-[url('/images/portfolio8.jpg')] bg-cover" />
        <div className="mb-20 mt-32 flex h-96 w-full flex-col items-center md:mt-20 md:flex-row md:px-36">
          <div className="flex h-full w-10/12 flex-col items-center justify-center text-center md:w-3/6">
            <h1 className="text-4xl">About Me</h1>
            <p className="px-5 pt-5 text-base">
              Hi, I’m Maëlys. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed pretium nibh a felis porta, vitae faucibus mi varius.
              Aliquam consectetur suscipit malesuada. ✨
            </p>
          </div>
          <div className="mx-auto h-full w-4/6 md:w-3/6">
            <img
              src="/images/aboutme.jpeg"
              alt="about me"
              className="mt-5 md:w-96"
            />
          </div>
        </div>
        <div className="my-40 mx-auto w-full">
          <div className="mx-auto max-w-6xl">
            <h1 className="pb-10 text-center text-4xl">My Work</h1>
            <HomePageGrid />
          </div>
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center pt-24 md:flex-row">
            <div className="mx-auto flex h-60 w-4/12 flex-col justify-between self-start md:mx-0">
              <h1 className="pt-5 text-4xl">Get in Touch</h1>
              <div className="mb-20">
                <a
                  href="mailto:maelyschay@gmail.com"
                  className="mb-3 text-lg transition-colors hover:text-orange-400"
                >
                  maelyschay@gmail.com
                </a>
                <p className="text-lg">France</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
