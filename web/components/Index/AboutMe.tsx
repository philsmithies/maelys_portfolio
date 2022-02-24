const AboutMe = (): JSX.Element => {
  return (
    <div className="mx-auto mt-20 flex h-auto w-11/12 flex-col items-center justify-center md:flex-row md:px-36 ">
      <div className="mx-auto flex h-full max-w-sm flex-col items-center justify-center text-center md:w-3/6">
        <h1 className="text-4xl">About Me</h1>
        <p className="px-5 pt-5 text-base">
          Hi, I’m Maëlys. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed pretium nibh a felis porta, vitae faucibus mi varius.
          Aliquam consectetur suscipit malesuada. ✨
        </p>
      </div>
      <div className="mx-auto h-full w-4/6 md:w-3/6">
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
