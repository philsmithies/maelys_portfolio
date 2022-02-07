import IllustrationGrid from "../components/IllustrationGrid";

const Illustration = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col pt-24 text-center">
        <h1 className="mt-20 text-4xl">Illustration 🌱 </h1>
        <p>
          I work as a digital illustrator in the fields of editorial
          illustration, book covers, illustrations for packaging and print
          products, advertising illustration, and system/brand illustrations.
        </p>
      </div>
      <IllustrationGrid />
    </>
  );
};

export default Illustration;
