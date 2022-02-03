import Link from "next/link";
import groq from "groq";
import client from "../client";
import BlogItem from "../components/BlogItem";

const Blog = ({ posts }) => {
  return (
    <div className="h-screen flex flex-col items-center max-w-4xl mx-auto">
      <div className="border-2 border-black w-full h-5/6 mt-40">
        <h1 className="text-3xl p-10 mt-24 self-start">Latest Posts</h1>
        {posts.length > 0 &&
          posts.map(
            ({
              _id,
              title = "",
              slug = "",
              publishedAt = "",
              author = "",
              body = "",
            }) =>
              slug && (
                <BlogItem
                  body={body[0].children[0].text}
                  key={_id}
                  author={author.name}
                  title={title}
                  slug={slug}
                  publishedAt={publishedAt}
                />
              )
          )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  console.log("posts here", posts);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
