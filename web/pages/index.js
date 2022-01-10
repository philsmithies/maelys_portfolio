import Link from "next/link";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-pink-100">
        <h1 className="text-red-500">Welcome to a blog!</h1>
      </div>
    </>
  );
};

export default Index;
