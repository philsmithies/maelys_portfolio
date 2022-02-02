import React from "react";
import Link from "next/link";

const BlogItem = ({ title, publishedAt, author, body, slug }) => {
  return (
    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
      <div className="bg-white w-full p-10 rounded flex flex-col m-10 hover:cursor-pointer hover:opacity-80">
        <h1>{title}</h1>
        <p className="text-sm text-red-400">{body}</p>
        <p className="text-sm text-red-400">
          {new Date(publishedAt).toDateString()}
        </p>
        <h2>{author}</h2>
      </div>
    </Link>
  );
};

export default BlogItem;
