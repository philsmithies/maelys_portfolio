import { NextPage } from "next/types";
import ImageMasonary from "../components/ImageMasonary";
import groq from "groq";
import client from "../client";

const Illustration: NextPage = ({ gallery }) => {
  const image7 = "/images/portfolio7.jpg";
  const image8 = "/images/portfolio8.jpg";
  const image9 = "/images/portfolio9.jpg";
  const image10 = "/images/portfolio10.jpg";
  const image11 = "/images/portfolio11.jpg";
  const image12 = "/images/portfolio12.jpg";
  const image13 = "/images/portfolio13.jpg";
  const image14 = "/images/portfolio14.jpg";
  const image15 = "/images/portfolio15.jpg";
  const image16 = "/images/portfolio16.jpg";

  const images = [
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col pt-24 text-center">
        <h1 className="mt-20 text-4xl">Illustration 🌱 </h1>
        <p>
          I work as a digital illustrator in the fields of editorial
          illustration, book covers, illustrations for packaging and print
          products, advertising illustration, and system/brand illustrations.
        </p>
      </div>
      <div className="z-0 pt-24 pb-24">
        <ImageMasonary images={gallery} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const gallery = await client.fetch(groq`
      *[_type == "gallery" && title == 'Illustration']
    `);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      gallery,
    },
  };
}

export default Illustration;
