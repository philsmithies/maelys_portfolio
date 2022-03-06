import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import client from "../client";
import { motion } from "framer-motion";

interface ImageProps {
  images: string[];
}

const HomePageGrid = ({ images: images }: ImageProps): JSX.Element => {
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

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = gallery.images.indexOf(imageToShow);
    if (currentIndex >= gallery.images.length - 1) {
      document.body.style.overflow = "unset";
      setLightBoxDisplay(false);
    } else {
      let nextImage = gallery.images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = gallery.images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = gallery.images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const onKeyDown = (e) => {
    if (["ArrowRight", "ArrowLeft"].indexOf(e.key) !== -1) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (e.key) {
      case "ArrowLeft":
        showPrev(e);
        break;
      case "ArrowRight":
        showNext(e);
        break;
      default:
        break;
    }
  };

  const onKeyPressed = (e) => {
    console.log(e.key);
  };

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120,
  };

  return (
    <>
      {lightboxDisplay ? (
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          id="lightbox"
          onClick={hideLightBox}
        >
          <FaArrowLeft
            className="w-20 hover:cursor-pointer"
            onClick={showPrev}
          />
          <img
            id="lightbox-img"
            src={urlFor(imageToShow).width(800).url()}
            className="h-5/6 transition-all	duration-700 ease-in-out"
          />
          <FaArrowRight
            className="w-20 hover:cursor-pointer"
            onClick={showNext}
          />
        </motion.div>
      ) : (
        ""
      )}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={"5px"}>
          {gallery.images.map((image, key) => (
            <div className="bg-white">
              <img
                className="image-card hover:cursor-pointer hover:opacity-50 focus:outline-none"
                onClick={() => showImage(image)}
                tabIndex={-1}
                onKeyDown={onKeyDown}
                // src={image}
                src={urlFor(image).width(800).url()}
                key={key}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default HomePageGrid;
