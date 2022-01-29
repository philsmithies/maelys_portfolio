import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Maëlys Cha: Illustrator</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
);
export default Layout;
