import React from "react";
import Link from "next/link";

const BlogItem = ({ title, publishedAt, author, body, slug }) => {
  return (
    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
      <div className="bg-white p-10 rounded-2xl flex flex-col m-10 hover:cursor-pointer hover:bg-slate-100 border-2 border-emerald-200">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{body}</p>
        <p className="text-sm">{new Date(publishedAt).toDateString()}</p>
        <h2>{author}</h2>
      </div>
    </Link>
  );
};

export default BlogItem;
