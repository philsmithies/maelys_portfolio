import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HomePageGrid from "./HomePageGrid";

import React from "react";

const Motion = () => {
  return (
    <div className="bg-teal-500">
      <Parallax pages={2} style={{ left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col w-full">
            <div className="w-full h-screen bg-cover bg-[url('/images/portfolio8.jpg')] top-[200px]">
              <h1 className="text-6xl pl-40 pt-40 font-serif text-white">
                Big Heart
              </h1>
              <h1 className="text-6xl pl-20 font-serif">Big Drawings</h1>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <HomePageGrid />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Motion;
