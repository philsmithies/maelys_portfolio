import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Maëlys Chavernac</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-teal-500">
        <Navbar />
      </div>
      <div className="flex flex-col h-screen">
        <div className="w-full h-4/6 bg-teal-600">
          <h1 className="text-3xl pl-40 pt-40">Big Heart</h1>
          <h1 className="text-3xl pl-20">Big Drawings</h1>
          <div className="w-2/4 h2/4 mt-40 ml-40 relative">
            <Image src="/images/portfolio1.jpg" layout="fill" />
          </div>
        </div>
        <div className="bg-black h-4/6 flex items-center">
          <h1 className="mt-20 ml-20 text-3xl">More text and niceness</h1>
          <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
            <div class="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
            <div class="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
            <div class="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-500">
        <Footer />
      </div>
    </>
  );
};

export default Index;
