import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const BlogItem = ({ title, publishedAt, author, body, slug, mainImage }) => {
  return (
    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
      <div className="bg-white p-10 rounded-2xl flex flex-col m-10 hover:cursor-pointer hover:bg-slate-100 border-2 border-emerald-200">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{body}</p>
        <p className="text-sm">{new Date(publishedAt).toDateString()}</p>
        {mainImage && (
          <img
            src={urlFor(mainImage)
              .image(mainImage)
              .fit("fill")
              .auto("format")
              .url()}
            alt={mainImage.alt || " "}
            loading="lazy"
            style={{
              padding: "2em",
              width: "20%",
              // Display alongside text if image appears inside a block text span
              // display: isInline ? "inline-block" : "block",
            }}
          />
        )}
        <h2>{author}</h2>
      </div>
    </Link>
  );
};
export default BlogItem;
