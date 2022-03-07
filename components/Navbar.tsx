import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useViewportScroll, useMotionValue } from "framer-motion";

const Navbar = (): JSX.Element => {
  const [hidden, setHidden] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);
  const genericHamburgerLine = `w-6 my-1 bg-black transition ease transform duration-300 mr-2`;

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

  function update() {
    if (scrollY?.get() < scrollY?.getPrevious()) {
      setHidden(false);
    } else if (scrollY?.get() > 50 && scrollY?.get() > scrollY?.getPrevious()) {
      setHidden(true);
    }
  }

  function toggleMobile() {
    setMobileHidden(!mobileHidden);
    if (mobileHidden) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className=" fixed left-0 right-0 z-10 flex flex-col items-center justify-around bg-white drop-shadow-sm md:m-3 md:mx-9 md:flex-row md:rounded-lg"
    >
      <div className="flex w-full items-center justify-between md:w-4/12">
        <Link href="/">
          <div className="ml-4  fill-black py-2 hover:cursor-pointer">
            <img src="/images/newbanner.png" className="max-h-44 w-2/5" />
          </div>
        </Link>
        <button
          className="group mr-2 flex h-10 w-10 flex-col items-center justify-center md:hidden"
          onClick={() => setMobileHidden(!mobileHidden)}
        >
          <div
            style={{ height: "2px" }}
            className={`${genericHamburgerLine} ${
              mobileHidden
                ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            style={{ height: "2px" }}
            className={`${genericHamburgerLine} ${
              mobileHidden ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            style={{ height: "2px" }}
            className={`${genericHamburgerLine} ${
              mobileHidden
                ? "-translate-y-2 -rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>

      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.52)" }}
        className={
          "flex h-screen w-full flex-col items-center justify-center transition-all " +
          (mobileHidden ? "block" : "hidden") +
          (mobileHidden ? "rotate" : "")
        }
      >
        <div className="h-2/6">
          <ul className="font-syne flex h-full flex-col justify-between text-4xl font-extrabold transition-colors">
            <Link href="/">
              <li
                className="hover:cursor-pointer hover:text-orange-400"
                onClick={toggleMobile}
              >
                Home
              </li>
            </Link>
            <Link href="/illustration">
              <li
                className="hover:cursor-pointer hover:text-orange-400"
                onClick={toggleMobile}
              >
                Illustration
              </li>
            </Link>
            {/* <Link href="/blog">
              <li
                className="hover:cursor-pointer hover:text-orange-400"
                onClick={toggleMobile}
              >
                Thoughts
              </li>
            </Link> */}
            <Link href="/about">
              <li
                className="hover:cursor-pointer hover:text-orange-400"
                onClick={toggleMobile}
              >
                About
              </li>
            </Link>
            <Link href="/about">
              <li
                className="hover:cursor-pointer hover:text-orange-400"
                onClick={toggleMobile}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="font-syne hidden items-center space-x-6 text-center font-bold md:flex">
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
        {/* <a
          href="/blog"
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-400 hover:text-orange-400"
        >
          Thoughts
        </a> */}
        <a
          href="/about"
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-400 hover:text-orange-400"
        >
          About
        </a>
        <a
          href="/contact"
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-400 hover:text-orange-400"
        >
          Contact
        </a>
        {/* <a href="" className="hover:text-orange-400">
          Shop
        </a> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
