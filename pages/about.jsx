import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Ball from "../public/Ball.png";

const About = () => {
  const [shoot, setShoot] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShoot(false);
    }, 800);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-white text-4xl">LETS PLAY</div>

      <div
        className={clsx("w-[50%] animate-spin duration-1000", {
          "scale-[10] animate-spin": shoot === true,
        })}
      >
        <Image quality={100} unoptimized src={Ball} />
      </div>
    </div>
  );
};

export default About;
