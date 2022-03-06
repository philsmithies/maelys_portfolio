import Link from "next/link";
import Image from "next/image";
import SocialsBar from "./SocialsBar";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto w-full bg-white  ">
      <hr style={{ height: 0.5 }} className="bg-black" />
      <div className="flex flex-col items-center py-8">
        <div className="mx-auto flex pl-6">
          <Link href="https://www.instagram.com/greencatmoon">
            <p className="mr-2 border-b-2 border-black border-transparent text-sm transition duration-150 hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
              Photos
            </p>
          </Link>
          <Link href="/blog">
            <p className="mr-2 border-b-2 border-black border-transparent text-sm transition duration-150 hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
              Thoughts
            </p>
          </Link>
          <a href="/about">
            <p className="mr-2 border-b-2 border-black border-transparent text-sm transition duration-150 hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
              About
            </p>
          </a>
          <a href="/contact">
            <p className="mr-2 border-b-2 border-black border-transparent text-sm transition duration-150 hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
              Contact
            </p>
          </a>
        </div>
        <SocialsBar />
        <img src="/images/footerlogo.png" className="mb-5 h-14" />
        <p className="mx-auto font-serif text-sm text-gray-600">
          Maëlys Chay &copy; 2022 ☺
        </p>
      </div>
    </footer>
  );
};

export default Footer;
