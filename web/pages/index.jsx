import { useRef } from "react";
import ContactForm from "../components/ContactForm";
import ScrollDownButton from "../components/ScrollDownButton";
import ScrollTopButton from "../components/ScrollTopButton";
import AboutMe from "../components/Index/AboutMe";
import MyWork from "../components/Index/MyWork";
import GetInTouch from "../components/Index/GetInTouch";

const Index = () => {
  const aboutRef = useRef(null);

  return (
    <>
      <div className="flex flex-col">
        <div className="top-[200px] mx-auto flex h-screen w-full justify-center bg-[url('/images/portfolio8.jpg')] bg-cover">
          <ScrollDownButton reference={aboutRef} />
        </div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div className="my-40 mx-auto w-full">
          <MyWork />
          <div className="mx-auto flex max-w-md flex-col items-center justify-center pt-24 lg:max-w-4xl lg:flex-row">
            <GetInTouch />
            <ContactForm />
            <ScrollTopButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
