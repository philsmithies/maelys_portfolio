import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useViewportScroll } from "framer-motion";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 50 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className="flex justify-around bg-white drop-shadow-sm m-3 rounded-lg left-0 right-0 mx-9 fixed z-10 "
    >
      <Link href="/">
        <div className="hover:cursor-pointer fill-black py-2">
          {/* <h1 className="text-3xl font-semibold transition duration-150 hover:cursor-pointer">
            MAËLYS CHA
          </h1> */}
          <img src="/logo.png" className="h-16" />
        </div>
      </Link>
      <div className="space-x-8 flex items-center font-serif">
        <a
          href="/"
          className="hover:text-orange-400 transition duration-150 border-b-2 border-transparent hover:border-orange-400"
        >
          Home
        </a>
        <a
          href="/illustration"
          className="hover:text-orange-400 transition duration-150 border-b-2 border-transparent hover:border-orange-400"
        >
          Illustration
        </a>
        <a
          href="/blog"
          className="hover:text-orange-400 transition duration-150 border-b-2 border-transparent hover:border-orange-400"
        >
          Thoughts
        </a>
        <a
          href="/about"
          className="hover:text-orange-400 transition duration-150 border-b-2 border-transparent hover:border-orange-400"
        >
          About
        </a>
        {/* <a href="" className="hover:text-orange-400">
          Shop
        </a> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
