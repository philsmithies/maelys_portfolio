import Link from "next/link";
import groq from "groq";
import client from "../client";
import BlogItem from "../components/BlogItem";

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "", author = "" }) =>
            slug && (
              <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <BlogItem
                  key={_id}
                  author={author.name}
                  title={title}
                  slug={slug}
                  publishedAt={publishedAt}
                />
              </Link>
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
