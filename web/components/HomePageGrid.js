const HomePageGrid = () => {
  return (
    <div className="bg-black h-fit flex items-center flex-col lg:flex-row mx-auto w-full pt-10">
      <h1 className="mt-20 mb-10 lg:ml-20 text-3xl">More text and niceness</h1>
      <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 lg:mr-10 sm:max-w-md lg:max-w-max pb-10">
        <div class="w-full rounded">
          <img src="/images/portfolio2.jpg" alt="image" />
        </div>
        <div class="w-full rounded">
          <img src="/images/portfolio3.jpg" alt="image" />
        </div>
        <div class="w-full rounded">
          <img src="/images/portfolio4.jpg" alt="image" />
        </div>
        <div class="w-full rounded">
          <img src="/images/portfolio7.jpg" alt="image" />
        </div>
        <div class="w-full rounded">
          <img src="/images/portfolio8.jpg" alt="image" />
        </div>
        <div class="w-full rounded">
          <img src="/images/portfolio9.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default HomePageGrid;
