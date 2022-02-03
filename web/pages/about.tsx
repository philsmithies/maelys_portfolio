import ContactForm from "../components/ContactForm";
import SocialsBar from "../components/SocialsBar";
import Link from "next/link";
import Image from "next/image";

const About = (): JSX.Element => {
  return (
    <>
      <div className="flex mx-auto justify-center pt-48 text-white">
        <div>
          <img src="/images/aboutme.jpeg" alt="about me" className="w-96" />
        </div>
        <div className="max-w-sm ml-10 flex flex-col">
          <h1 className="text-4xl pb-3 text-black">Maelys Cha Cha</h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
            nibh a felis porta, vitae faucibus mi varius. Proin ornare lobortis
            ex. Aliquam consectetur suscipit malesuada. Sed dignissim nibh non
            felis vehicula cursus a in enim. Nunc varius, mauris eu congue
            aliquam, est ex rutrum sem, id fringilla felis diam sed purus. Donec
            aliquam ipsum et hendrerit fermentum. Aliquam posuere nisl ut ante
            condimentum sagittis. Fusce ut lorem at nibh hendrerit interdum id
            vitae mauris. Vivamus non nisi imperdiet, convallis mauris nec,
            tincidunt purus. Nunc aliquet vel nisi at rutrum. Cras gravida
            convallis justo non eleifend. Nullam tellus mi, varius ut lacus eu,
            lacinia aliquet enim.
            <br />
            <br />
            Phasellus eu tincidunt libero. Integer fermentum nec velit eget
            vulputate. Sed vitae fringilla odio, in semper metus. Aliquam
            suscipit turpis id dolor vulputate, nec blandit dui lacinia.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-24 mx-auto max-w-4xl">
        <div className="w-4/12 h-60 self-start flex flex-col justify-between">
          <h1 className="text-4xl pt-5">Get in Touch</h1>
          <div className="mb-20">
            <p className="text-lg mb-3">maelyschay@gmail.com</p>
            <p className="text-lg">France</p>
          </div>
          <div className="flex">
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
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default About;
