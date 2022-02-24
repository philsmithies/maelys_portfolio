import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source: string) {
  return imageUrlBuilder(client).image(source);
}

function previewText(body: string) {
  return body.substring(0, 200);
}

interface BlogItem {
  title: string;
  publishedAt: string | null;
  body: string;
  slug: {
    current: string;
  };
  mainImage: {
    alt: string;
    url: string;
  };
  categories: string | null;
}

const BlogItem = ({
  title,
  publishedAt,
  body,
  slug,
  mainImage,
  categories,
}: BlogItem): JSX.Element => {
  return (
    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
      <div className="border-1 m-2 flex max-w-md flex-col rounded-lg border-slate-400 bg-white p-10 transition-all hover:cursor-pointer hover:bg-gray-100 hover:drop-shadow-md sm:w-10/12 md:w-8/12 ">
        {mainImage && (
          <img
            src={urlFor(mainImage).image(mainImage).url()}
            alt={mainImage.alt || " "}
            className="mb-6 h-52 w-full object-cover"
          />
        )}
        <h1 className="text-3xl">{title}</h1>
        <p className="text-sm">{`${previewText(body)}...`}</p>
        {/* {categories && (
          <ul className="flex text-gray-400 pb-36">
            {categories.map((category) => (
              <p key={category}>Posted in {category}</p>
            ))}
          </ul>
        )} */}
        <button className="my-3 w-max rounded bg-orange-400 px-1 py-1 text-xs">
          Personal Work
        </button>
      </div>
    </Link>
  );
};
export default BlogItem;
