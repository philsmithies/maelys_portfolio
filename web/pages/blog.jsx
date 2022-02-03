import Link from "next/link";
import groq from "groq";
import client from "../client";
import BlogItem from "../components/BlogItem";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div className="h-screen flex flex-col items-center max-w-4xl mx-auto">
      <div className="w-full h-5/6 mt-24">
        <h1 className="text-4xl p-10 mx-auto text-center">Blog</h1>
        <div className="flex item">
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
