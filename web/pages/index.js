import Link from "next/link";
import groq from "groq";
import client from "../client";

const Index = ({ posts }) => {
  console.log(posts[0]);
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", _createdAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(_createdAt).toDateString()})
              </li>
            )
        )}
    </div>
  );
};

// {*[_type == "post"] | order(publishedAt desc)}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == 'post' &&
      *[_type == "category" &&
        title == "Personal Work"][0]._id in categories[]._ref]
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
