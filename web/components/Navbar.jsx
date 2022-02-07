import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useViewportScroll } from "framer-motion";
import { FaGripLines, FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);

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
      className="fixed left-0 right-0 z-10 flex flex-col items-center justify-around bg-white drop-shadow-sm md:m-3 md:mx-9 md:flex-row md:rounded-lg "
    >
      <div className="flex w-full items-center justify-between md:w-4/12">
        <Link href="/">
          <div className="ml-4 fill-black py-2 hover:cursor-pointer">
            <img src="/logo.png" className="h-12 md:h-16" />
          </div>
        </Link>
        <FaGripLines
          className="mr-4 h-6 w-6 cursor-pointer md:hidden"
          onClick={() => setMobileHidden(!mobileHidden)}
        />
      </div>

      <div
        className={
          "flex h-screen w-full flex-col items-center justify-center bg-white  transition-all " +
          (mobileHidden ? "block" : "hidden")
        }
      >
        {/* <FaRegWindowClose className="absolute top-0 right-0" /> */}
        <div className="h-2/6">
          <ul className="flex h-full flex-col justify-between text-4xl transition-colors ">
            <Link href="/" onClick={() => setMobileHidden(!mobileHidden)}>
              <li className="hover:cursor-pointer hover:text-orange-400">
                Home
              </li>
            </Link>
            <Link
              href="/illustration"
              onClick={() => setMobileHidden(!mobileHidden)}
            >
              <li className="hover:cursor-pointer hover:text-orange-400">
                Illustration
              </li>
            </Link>
            <Link href="/blog" onClick={() => setMobileHidden(!mobileHidden)}>
              <li className="hover:cursor-pointer hover:text-orange-400">
                Thoughts
              </li>
            </Link>
            <Link href="/about" onClick={() => setMobileHidden(!mobileHidden)}>
              <li className="hover:cursor-pointer hover:text-orange-400">
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        // style={{ display: setMobileHidden ? "none" : "block" }}
        className="hidden items-center space-x-8 font-serif md:flex"
      >
        <a
          href="/"
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-400 hover:text-orange-400"
        >
          Home
        </a>
        <a
          href="/illustration"
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-400 hover:text-orange-400"
        >
          Illustration
        </a>
        <a
          href="/blog"
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-400 hover:text-orange-400"
        >
          Thoughts
        </a>
        <a
          href="/about"
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-400 hover:text-orange-400"
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
