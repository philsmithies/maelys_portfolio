import Link from "next/link";
import groq from "groq";
import client from "../client";
import BlogItem from "../components/BlogItem";

const Blog = ({ posts }) => {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col items-center">
      <div className="mt-32 h-5/6 w-full rounded-xl">
        <h1 className="mx-auto p-10 text-center text-4xl">Blog</h1>
        <div className="flex flex-col items-center md:flex-row">
          {posts.length > 0 &&
            posts.map(
              ({
                _id,
                title = "",
                slug = "",
                publishedAt = "",
                author = "",
                body = "",
                mainImage = "",
                categories = "",
              }) =>
                slug && (
                  <BlogItem
                    body={body[0].children[0].text}
                    key={_id}
                    author={author.name}
                    title={title}
                    slug={slug}
                    publishedAt={publishedAt}
                    mainImage={mainImage}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
