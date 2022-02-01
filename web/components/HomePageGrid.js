import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const HomePageGrid = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter={5}>
        <img
          src="/images/portfolio7.jpg"
          alt="image"
          className="hover:opacity-50 hover:cursor-pointer"
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
          src="/images/portfolio2.jpg"
          alt="image"
          className="hover:opacity-50 hover:cursor-pointer"
        />
        <img
          src="/images/portfolio3.jpg"
          alt="image"
          className="hover:opacity-50 hover:cursor-pointer"
        />
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default HomePageGrid;
