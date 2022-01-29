import React from "react";

const BlogItem = ({ title, publishedAt, author }) => {
  return (
    <div className="bg-red-400 max-w-4xl p-10 rounded flex flex-col m-10">
      <h1>{title}</h1>
      <p>({new Date(publishedAt).toDateString()})</p>
      <h2>{author}</h2>
    </div>
  );
};

export default BlogItem;
