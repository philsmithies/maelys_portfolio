import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function previewText(body) {
  return body.substring(0, 200);
}

const BlogItem = ({
  title,
  publishedAt,
  body,
  slug,
  mainImage,
  categories,
}) => {
  return (
    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
      <div className="bg-white border-1 border-slate-400 p-10 flex flex-col m-2 rounded-lg hover:cursor-pointer hover:bg-slate-100 w-6/12 hover:drop-shadow-xl">
        {mainImage && (
          <img
            src={urlFor(mainImage).image(mainImage).url()}
            alt={mainImage.alt || " "}
            className="w-full h-52 mb-6 object-cover"
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
      </div>
    </Link>
  );
};
export default BlogItem;
