import ImageMasonary from "../ImageMasonary";

interface GalleryImages {
  gallery: {
    images: {}[];
  };
}

const MyWork = ({ gallery }: GalleryImages): JSX.Element => {
  return (
    <div className="mx-auto max-w-6xl px-12 py-12 md:mt-0">
      <h1 className="font-syne pb-10 text-center text-4xl font-semibold">
        My Work
      </h1>
      <ImageMasonary gallery={gallery} />
    </div>
  );
};

export default MyWork;
