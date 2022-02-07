import Link from "next/link";
import Image from "next/image";
import SocialsBar from "./SocialsBar";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto w-full">
      <hr style={{ height: 0.5 }} className="bg-black" />
      <div className="flex flex-col py-8">
        <div className="mx-auto flex pl-6">
          <Link href="https://www.instagram.com/greencatmoon">
            <p className="mr-2 border-b-2 border-black border-transparent text-xl transition duration-150 hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
              Photos
            </p>
          </Link>
          <Link href="/blog">
            <p className="mr-2 border-b-2 border-black border-transparent text-xl transition duration-150 hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
              Thoughts
            </p>
          </Link>
          <a href="/about#contact">
            <p className="mr-2 border-b-2 border-black border-transparent text-xl transition duration-150 hover:cursor-pointer hover:border-orange-400 hover:text-orange-400">
              Contact
            </p>
          </a>
        </div>
        <SocialsBar />
        <p className="mx-auto font-serif text-sm text-gray-600">
          Maëlys Chavernac &copy; 2022
        </p>
      </div>
      {/* <Image src="/images/footerlogo.png" className="h-3/4 w-3/12" /> */}
    </footer>
  );
};

export default Footer;
