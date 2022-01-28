import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navHeight, setNavHeight] = useState("h24");

  const handleToggle = () => {
    if (navOpen) {
      console.log("clicked");
    }
  };

  return (
    <nav className="container flex justify-around py-1 mx-auto bg-teal-500 w-screen sticky z-10">
      <div>
        <Image
          src="/daisy.png"
          width={80}
          height={80}
          className="self-end justify-self-center"
        />
      </div>
      <div className="space-x-8 flex items-center font-serif">
        <a href="/" className="hover:text-teal-600">
          Home
        </a>
        <a href="/about" className="hover:text-teal-600">
          About Me
        </a>
        <a href="/blog" className="hover:text-teal-600">
          Blog
        </a>
        {/* <a href="" className="hover:text-teal-600">
          Shop
        </a> */}
        <a href="/contact" className="hover:text-teal-600">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
