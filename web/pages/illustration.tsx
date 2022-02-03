import IllustrationGrid from "../components/IllustrationGrid";

const Illustration = (): JSX.Element => {
  return (
    <>
      <div className="pt-24 flex flex-col text-center max-w-3xl mx-auto">
        <h1 className="text-4xl mt-20">Illustration 🌱 </h1>
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
