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
    <nav class="container flex justify-around py-8 mx-auto bg-teal-500 w-screen">
      <div>
        <Image
          src="/daisy.png"
          width={80}
          height={80}
          className="self-end justify-self-center"
        />
      </div>
      <div class="space-x-8 flex items-center">
        <a href="" className="hover:text-teal-600">
          Home
        </a>
        <a href="" className="hover:text-teal-600">
          About Me
        </a>
        <a href="" className="hover:text-teal-600">
          Blog
        </a>
        <a href="" className="hover:text-teal-600">
          Shop
        </a>
        <a href="" className="hover:text-teal-600">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
