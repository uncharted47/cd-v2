import React from "react";
import CountUp from "../ui/CountUp";
import fontTitle from "@/lib/font";


const Numbers = () => {
  const items = [
    {
      number: 7500,
      label: "m2 d’espaces verts",
    },
    {
      number: 1200,
      label: "arbres et plantations",
    },
    {
      number: 20,
      label: "œuvres d’art ",
    },
  ];
  return (
    <div
      className="mt-24 bg-cover bg-center"
      style={{ backgroundImage: `url(/e01.webp)` }}
    >
      <div className="py-24 w-full h-full  bg-[#0000008c] transition-opacity duration-700">
        <div className="container mx-auto text-white px-5">
          <div className="flex flex-col gap-3 items-center text-center my-12">
            {/* <h2 className="text-sm lg:text-lg">Clé Blanche Souissi</h2> */}
            <p className={`text-3xl lg:text-5xl font-semibold text-second ${fontTitle.className}`}>
              Un écrin de verdure. <br></br> Une promesse de sérénité
            </p>
          </div>
          <div className="grid lg:grid-cols-3 lg:divide-x-4 divide-white/80 gap-5 lg:gap-10 lg:mt-24">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-col flex gap-5 justify-center items-center py-12"
              >
                <div className="text-5xl lg:text-7xl text-white font-light">
                  +
                  <CountUp
                    from={0}
                    to={item.number}
                    separator=" "
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <p className="text-xl lg:text-2xl text-second">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
