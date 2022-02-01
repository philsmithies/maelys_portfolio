import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const IllustrationGrid = () => {
  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        className="pt-24 pb-24 z-0"
      >
        <Masonry gutter={5}>
          <img
            src="/images/portfolio7.jpg"
            alt="image"
            className="hover:cursor-pointer"
          />
          <img
            src="/images/portfolio6.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          {/* Children */}
          <img
            src="/images/portfolio4.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio9.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio3.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio2.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio7.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio10.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio1.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio11.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio12.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio13.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio14.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio16.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src="/images/portfolio17.jpg"
            alt="image"
            className="hover:opacity-50 hover:cursor-pointer"
          />
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default IllustrationGrid;
