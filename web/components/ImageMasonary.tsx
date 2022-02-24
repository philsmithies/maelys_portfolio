import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HomePageGrid = ({ images }): JSX.Element => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const hideLightBox = () => {
    document.body.style.overflow = "unset";
    setLightBoxDisplay(false);
  };

  const showImage = (image) => {
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={"5px"}>
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
