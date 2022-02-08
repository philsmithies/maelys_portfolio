import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HomePageGrid = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

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

  const hideLightBox = () => {
    document.body.style.overflow = "unset";
    setLightBoxDisplay(false);
  };

  const showImage = (image) => {
    document.body.style.overflow = "hidden";
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <FaArrowLeft
            className="w-20 hover:cursor-pointer"
            onClick={showNext}
          />
          <img id="lightbox-img" src={imageToShow} className="h-5/6"></img>
          <FaArrowRight
            className="w-20 hover:cursor-pointer"
            onClick={showNext}
          />
        </div>
      ) : (
        ""
      )}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        className="px-12"
      >
        <Masonry gutter={5}>
          {images.map((image, key) => (
            <img
              className="image-card hover:cursor-pointer hover:opacity-50"
              onClick={() => showImage(image)}
              src={image}
              key={key}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default HomePageGrid;
