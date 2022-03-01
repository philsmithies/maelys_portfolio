import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import imageUrlBuilder from "@sanity/image-url";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import client from "../client";

interface ImageProps {
  images: string[];
}

const HomePageGrid = ({ images: images }: ImageProps): JSX.Element => {
  console.log("the gallery is", images[0]);

  let gallery = images[0];
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const hideLightBox = () => {
    document.body.style.overflow = "unset";
    setLightBoxDisplay(false);
  };

  const showImage = (image: string) => {
    document.body.style.overflow = "hidden";
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const showNext = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <FaArrowLeft
            className="w-20 hover:cursor-pointer"
            onClick={() => showNext}
          />
          <img id="lightbox-img" src={imageToShow} className="h-5/6"></img>
          <FaArrowRight
            className="w-20 hover:cursor-pointer"
            onClick={() => showNext}
          />
        </div>
      ) : (
        ""
      )}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={"5px"}>
          {gallery.images.map((image, key) => (
            <img
              className="image-card hover:cursor-pointer hover:opacity-50"
              onClick={() => showImage(image)}
              // src={image}
              src={urlFor(image).width(800).url()}
              key={key}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default HomePageGrid;
