// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor(value).image(value).fit("fill").auto("format").url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        padding: "2em",
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
};

const Post = ({ post }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body,
    mainImage,
  } = post;
  console.log(post);
  return (
    <article className="h-max w-full pt-32 mb-32">
      <div className="w-6/12 mx-auto p-3">
        <Link href="/blog">
          <button className="text-gray-500 shadow border-grey-500 border-2 hover:bg-gray-200 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded">
            Back
          </button>
        </Link>
        <h1 className="text-3xl mt-10">{title}</h1>
        <span>By {name}</span>
        {authorImage && (
          <div>
            <img
              src={urlFor(authorImage).width(50).height(50).url()}
              className="rounded-full mb-10"
            />
          </div>
        )}
        <PortableText value={body} components={components} />
        {/* {categories && (
          <ul className="flex text-gray-400 pb-36">
            {categories.map((category) => (
              <p key={category}>Posted in {category}</p>
            ))}
          </ul>
        )} */}
      </div>
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
