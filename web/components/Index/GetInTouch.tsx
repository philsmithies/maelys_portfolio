const GetInTouch = (): JSX.Element => {
  return (
    <div className="mx-auto flex h-60 w-6/12 flex-col justify-between self-start text-center lg:w-3/12 lg:text-left">
      <h1 className="font-syne pt-5 text-4xl font-semibold">Get in Touch</h1>
      <div className="mb-20">
        <a
          href="mailto:maelyschay@gmail.com"
          className="mb-3 text-lg transition-colors hover:text-orange-400"
        >
          maelyschay@gmail.com
        </a>
        <p className="text-lg">France</p>
      </div>
    </div>
  );
};

export default GetInTouch;
