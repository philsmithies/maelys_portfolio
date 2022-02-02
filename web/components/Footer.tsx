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
            <p className="hover:cursor-pointer text-xl border-black border-b-2 mr-2 hover:text-teal-600 transition duration-150 border-transparent hover:border-teal-500">
              Photos
            </p>
          </Link>
          <Link href="/blog">
            <p className="hover:cursor-pointer text-xl border-black border-b-2 mr-2 hover:text-teal-600 transition duration-150 border-transparent hover:border-teal-500">
              Thoughts
            </p>
          </Link>
        </div>
        <SocialsBar />
        <p className="text-gray-600 font-serif mx-auto text-sm">
          Maëlys Chavernac &copy; 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
