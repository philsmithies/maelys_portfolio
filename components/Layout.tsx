import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { ReactChildren, ReactChild } from "react";
interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Maëlys Chay: Illustration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
