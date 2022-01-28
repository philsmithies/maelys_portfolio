import Link from "next/link";
import groq from "groq";
import client from "../client";
import Navbar from "../components/Navbar";

const Blog = ({ posts }) => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(publishedAt).toDateString()})
              </li>
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
