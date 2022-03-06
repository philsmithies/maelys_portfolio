import { NextPage } from "next/types";
import ImageMasonary from "../components/ImageMasonary";
import groq from "groq";
import client from "../client";

const Illustration: NextPage = ({ gallery }) => {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col pt-24 text-center">
        <h1 className="font-syne mt-28 text-4xl">Illustration 🌱 </h1>
        <p className="mt-2 font-medium">
          I work as a digital illustrator in the fields of editorial
          illustration, book covers, illustrations for packaging and print
          products, advertising illustration, and system/brand illustrations.
        </p>
      </div>
      <div className="z-0 py-24">
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
