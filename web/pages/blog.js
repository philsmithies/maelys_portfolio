import Link from "next/link";
import groq from "groq";
import client from "../client";
import BlogItem from "../components/BlogItem";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div className="h-screen flex flex-col items-center max-w-4xl mx-auto">
      <h1 className="text-4xl text-white mt-10">Blog</h1>
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
