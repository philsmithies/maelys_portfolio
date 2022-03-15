// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import imageUrlBuilder from "@sanity/image-url";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { getClient } from "../utils/sanity";
import Image from "next/image";
import { KeyboardEvent } from "react";

interface GalleryImages {
  gallery: {
    images: {}[];
  };
}

const HomePageGrid = ({ gallery }: GalleryImages): JSX.Element => {
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

  const showNext = () => {
    let currentIndex = gallery.images.indexOf(imageToShow);
    if (currentIndex >= gallery.images.length - 1) {
      document.body.style.overflow = "unset";
      setLightBoxDisplay(false);
    } else {
      let nextImage = gallery.images[currentIndex + 1];
      setImageToShow(nextImage as string);
    }
  };

  const showPrev = () => {
    let currentIndex = gallery.images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = gallery.images[currentIndex - 1];
      setImageToShow(nextImage as string);
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if (["ArrowRight", "ArrowLeft"].indexOf(key) !== -1) {
      event.preventDefault();
      event.stopPropagation();
    }
    switch (key) {
      case "ArrowLeft":
        showPrev();
        break;
      case "ArrowRight":
        showNext();
        break;
      default:
        break;
    }
  };

  const builder = imageUrlBuilder(getClient(true));

  function urlFor(source: string) {
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
          <div className="h-5/6 transition-all flex items-center	duration-700 ease-in-out">
            <img
              id="lightbox-img"
              src={urlFor(imageToShow).width(800).url() as string}
            />
          </div>
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
          {gallery.images.map((image: any, key) => (
            <div key={key} className="bg-white mx-auto md:mx-0">
              <div className="image-card hover:cursor-pointer hover:opacity-50 focus:outline-none">
                <img
                  className="cover"
                  src={urlFor(image).width(800).url() as string}
                  onClick={() => showImage(image)}
                  tabIndex={-1}
                  key={key}
                  onKeyDown={onKeyDown}
                />
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default HomePageGrid;
