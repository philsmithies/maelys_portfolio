import ImageMasonary from "../ImageMasonary";

const MyWork = () => {
  const image7 = "/images/portfolio7.jpg";
  const image8 = "/images/portfolio8.jpg";
  const image9 = "/images/portfolio9.jpg";
  const image10 = "/images/portfolio10.jpg";
  const image11 = "/images/portfolio11.jpg";
  const image12 = "/images/portfolio12.jpg";
  const image13 = "/images/portfolio13.jpg";
  const image14 = "/images/portfolio14.jpg";
  const image15 = "/images/portfolio15.jpg";
  const image16 = "/images/portfolio16.jpg";

  const images = [
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  return (
    <div className="mx-auto max-w-6xl px-12 md:mt-0">
      <h1 className="pb-10 text-center text-4xl">My Work</h1>
      <ImageMasonary images={images} />
    </div>
  );
};

export default MyWork;
