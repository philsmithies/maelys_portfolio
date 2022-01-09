import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-screen h-24 bg-red-400 flex pl-10 align-middle items-center">
      <Image src="/daisy.png" width={50} height={50} />
      <h1> Hey it is a navbar</h1>
    </div>
  );
};

export default Navbar;
