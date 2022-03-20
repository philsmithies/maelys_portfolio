import { NextPage } from "next/types";
import ImageMasonary from "../components/ImageMasonary";
import type { PageProps } from "../types";
import { getClient } from "../utils/sanity";
import groq from "groq";

const Illustration = ({ gallery, websiteText }: PageProps) => {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col pt-24 text-center">
        <p className="mt-28 font-medium text-lg">
          {websiteText.illustrationIntro}
        </p>
      </div>
      <div className="z-0 py-24">
        <ImageMasonary gallery={gallery} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const websiteText = await getClient(true).fetch(groq`
  *[_type == "textContent"][0]
`);

  const gallery = await getClient(true).fetch(groq`
*[_type == "gallery" && title == 'Illustration'][0]
`);

  return {
    props: {
      gallery,
      websiteText,
    },
  };
};

export default Illustration;
