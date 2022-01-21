const HomePageGrid = () => {
  return (
    <div className="bg-teal-600 h-fit flex items-center flex-col mx-auto w-full pt-10">
      <h1 className="mt-20 lg:mt-0 mb-10 lg:ml-20 text-3xl font-serif">
        My Work
      </h1>
      <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 sm:max-w-md lg:max-w-max lg:pr-10 lg:pl-10 pb-10">
        <div class="w-full rounded hover:opacity-50 hover:cursor-pointer">
          <img src="/images/portfolio2.jpg" alt="image" />
        </div>
        <div class="w-full rounded hover:opacity-50 hover:cursor-pointer">
          <img src="/images/portfolio3.jpg" alt="image" />
        </div>
        <div class="w-full rounded hover:opacity-50 hover:cursor-pointer">
          <img src="/images/portfolio4.jpg" alt="image" />
        </div>
        <div class="w-full rounded hover:opacity-50 hover:cursor-pointer">
          <img src="/images/portfolio7.jpg" alt="image" />
        </div>
        <div class="w-full rounded hover:opacity-50 hover:cursor-pointer">
          <img src="/images/portfolio8.jpg" alt="image" />
        </div>
        <div class="w-full rounded hover:opacity-50 hover:cursor-pointer">
          <img src="/images/portfolio9.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default HomePageGrid;
