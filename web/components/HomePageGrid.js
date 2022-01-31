import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const HomePageGrid = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        <img src="/images/portfolio7.jpg" alt="image" />
        <img src="/images/portfolio6.jpg" alt="image" />
        {/* Children */}
        <img src="/images/portfolio4.jpg" alt="image" />
        <img src="/images/portfolio9.jpg" alt="image" />
        <img src="/images/portfolio3.jpg" alt="image" />
        <img src="/images/portfolio2.jpg" alt="image" />
        <img src="/images/portfolio7.jpg" alt="image" />
        <img src="/images/portfolio10.jpg" alt="image" />
        <img src="/images/portfolio1.jpg" alt="image" />
        <img src="/images/portfolio11.jpg" alt="image" />
        <img src="/images/portfolio12.jpg" alt="image" />
        <img src="/images/portfolio13.jpg" alt="image" />
        <img src="/images/portfolio14.jpg" alt="image" />
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default HomePageGrid;
