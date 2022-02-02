import Image from "next/image";
import Link from "next/link";

const SocialsBar = (): JSX.Element => {
  return (
    <div className="flex w-full justify-center my-5">
      <div className="mr-2">
        <Link href="mailto:greencatmoon@gmail.com">
          <Image
            src="/icons/email.svg"
            className="hover:cursor-pointer"
            height={18}
            width={18}
          />
        </Link>
      </div>
      <div className="mr-2">
        <Link href="https://www.instagram.com/maelyschay">
          <Image
            src="/icons/instagram.svg"
            className="hover:cursor-pointer"
            height={18}
            width={18}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialsBar;
