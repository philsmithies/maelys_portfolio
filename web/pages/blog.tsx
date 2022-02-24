import Link from "next/link";
import groq from "groq";
import client from "../client";
import BlogItem from "../components/BlogItem";
import { NextPage } from "next/types";
import { ReactNode } from "react";

interface Posts {
  posts: {
    author: {
      name: string;
    };
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    _createdAt: string;
    publishedAt: string | null;
    body: {
      children: {
        text: string | null;
      };
    }[];
    mainImage: {
      alt: string;
      src: string;
    };
    categories: string | null;
  }[];
}

const Blog: NextPage<Posts> = ({ posts }) => {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col items-center">
      <div className="mt-32 h-5/6 w-full rounded-xl">
        <h1 className="mx-auto p-10 text-center text-4xl">Blog</h1>
        <div className="flex flex-col items-center md:flex-row">
          {posts.length > 0 &&
            posts.map(
              ({
                _id,
                title,
                slug,
                publishedAt,
                author,
                body,
                mainImage,
                categories,
              }) =>
                slug && (
                  <BlogItem
                    body={body[0].children[0].text}
                    key={_id}
                    categories={categories}
                    author={author}
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
