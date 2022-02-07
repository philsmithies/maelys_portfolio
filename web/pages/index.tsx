import HomePageGrid from "../components/HomePageGrid";

const Index = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col pt-20">
        <div className="mx-auto my-10 w-8/12 p-10 text-center text-2xl">
          Hi, I’m Maëlys. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed pretium nibh a felis porta, vitae faucibus mi varius.
          Aliquam consectetur suscipit malesuada. ✨
        </div>
        <div className="top-[200px] mx-auto h-screen w-11/12 max-w-6xl bg-[url('/images/portfolio8.jpg')] bg-cover" />
        <div className="my-40 mx-auto w-full">
          <div className="mx-auto max-w-6xl">
            <h1 className="pb-10 text-center text-4xl">My Work</h1>
            <HomePageGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
