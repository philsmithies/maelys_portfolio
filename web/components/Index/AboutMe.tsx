const AboutMe = (): JSX.Element => {
  return (
    <div className="mt-20 flex h-auto w-11/12 flex-col items-center justify-center md:flex-row md:px-36 ">
      <div className="flex h-full max-w-sm flex-col items-center justify-center text-center md:w-3/6">
        <h1 className="font-syne text-4xl font-semibold">About Me</h1>
        <p className="font-syne px-5 pt-5 text-base">
          Hi, I’m Maëlys. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed pretium nibh a felis porta, vitae faucibus mi varius.
          Aliquam consectetur suscipit malesuada. ✨
        </p>
        <img
          src="/images/rainbowblue.svg"
          alt="about me"
          className="absolute -z-10 mt-36 w-40 self-start fill-yellow-100"
        />
        <img
          src="/images/lightstar.svg"
          alt="about me"
          className="absolute -z-10 mt-16 w-20 self-start fill-yellow-100"
        />
      </div>
      <div className="mx-auto ml-5 h-full w-4/6 md:w-3/6">
        <img
          src="/images/aboutme.jpeg"
          alt="about me"
          className="mt-5 md:w-96"
        />
      </div>
    </div>
  );
};

export default AboutMe;
