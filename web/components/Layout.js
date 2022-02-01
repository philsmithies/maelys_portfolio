import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [lastYPosition, setLastYPosition] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPosition = window.scrollY;
      const isScrollingUp = yPosition < lastYPosition;
      console.log("scrolling");
      setShowNav(isScrollingUp);
      setLastYPosition(yPosition);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPosition]);

  return (
    <>
      <Head>
        <title>Maëlys Cha: Illustrator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div
        animate={{ opacity: showNav ? 1 : 0 }}
        initial={{ opacity: 1 }}
      >
        <Navbar />
      </motion.div>
      {children}
      <Footer />
    </>
  );
};
export default Layout;
