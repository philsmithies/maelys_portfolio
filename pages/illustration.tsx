import { NextPage } from "next/types";
import ImageMasonary from "../components/ImageMasonary";
import type { PageProps } from "../types";
import { getClient } from "../utils/sanity";
import groq from "groq";

const Illustration = ({ gallery, websiteText }: PageProps) => {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col pt-24 text-center">
        <h1 className="font-syne mt-28 text-4xl">Illustration 🌱 </h1>
        <p className="mt-2 font-medium">{websiteText["illustrationIntro"]}</p>
      </div>
      <div className="z-0 py-24">
        <ImageMasonary galleryImages={gallery} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const websiteText = await getClient(true).fetch(groq`
  *[_type == "textContent"][0]
`);

  const gallery = await getClient(true).fetch(groq`
*[_type == "gallery" && title == 'Illustration']
`);

  return {
    props: {
      gallery,
      websiteText,
    },
  };
};

export default Illustration;
