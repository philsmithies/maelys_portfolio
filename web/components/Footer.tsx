import Link from "next/link";
import Image from "next/image";
import SocialsBar from "./SocialsBar";

const Footer = (): JSX.Element => {
  return (
    <footer className="w-full mx-auto">
      <hr style={{ height: 0.5 }} className="bg-black" />
      <div className="flex flex-col py-8">
        <div className="flex mx-auto pl-6">
          <Link href="https://www.instagram.com/greencatmoon">
            <p className="hover:cursor-pointer text-xl border-black border-b-2 mr-2 hover:text-orange-400 transition duration-150 border-transparent hover:border-orange-400">
              Photos
            </p>
          </Link>
          <Link href="/blog">
            <p className="hover:cursor-pointer text-xl border-black border-b-2 mr-2 hover:text-orange-400 transition duration-150 border-transparent hover:border-orange-400">
              Thoughts
            </p>
          </Link>
          <a href="/about#contact">
            <p className="hover:cursor-pointer text-xl border-black border-b-2 mr-2 hover:text-orange-400 transition duration-150 border-transparent hover:border-orange-400">
              Contact
            </p>
          </a>
        </div>
        <SocialsBar />
        <p className="text-gray-600 font-serif mx-auto text-sm">
          Maëlys Chavernac &copy; 2022
        </p>
      </div>
      {/* <Image src="/images/footerlogo.png" className="h-3/4 w-3/12" /> */}
    </footer>
  );
};

export default Footer;
