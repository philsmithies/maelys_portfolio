import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navHeight, setNavHeight] = useState("h24");

  const handleToggle = () => {
    if (navOpen) {
      console.log("clicked");
    }
  };

  return (
    <nav className="container flex justify-around py-1 mx-auto w-screen sticky z-10">
      <Link href="/">
        <div className="hover:cursor-pointer fill-black pb-5 pt-5">
          <h1 className="text-4xl font-semibold transition duration-150 hover:cursor-pointer">
            MAËLYS CHA
          </h1>
        </div>
      </Link>
      <div className="space-x-8 flex items-center font-serif">
        <a
          href="/"
          className="hover:text-teal-600 transition duration-150 border-b-2 border-transparent hover:border-teal-500"
        >
          Home
        </a>
        <a
          href="/"
          className="hover:text-teal-600 transition duration-150 border-b-2 border-transparent hover:border-teal-500"
        >
          Illustration
        </a>
        <a
          href="/blog"
          className="hover:text-teal-600 transition duration-150 border-b-2 border-transparent hover:border-teal-500"
        >
          Thoughts
        </a>
        <a
          href="/about"
          className="hover:text-teal-600 transition duration-150 border-b-2 border-transparent hover:border-teal-500"
        >
          About
        </a>
        {/* <a href="" className="hover:text-teal-600">
          Shop
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
