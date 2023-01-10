import React from "react";
import logoImg from "../img/flower.png";
import woman from "../img/woman.png";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: "#185bce" },
    { value: "#272425" },
    { value: "#617453" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="w-[426px] min-h-[600px] bg-[#e3e2df] rounded-[30px] border-[4px] border-white px-[40px] py-25px] cursor-grab relative"
      >
        <div className="my-6 w-[40px]">
          <img src={logoImg} alt="" />
        </div>
        <h1 className="text-5xl mb-6 font-extrabold">Fashion Stylish</h1>
        <p className="max-w-[300px] text-[#000] mb-6">
          Your order made our day. We hoe that makes yours ! Your support means
          the world. We would love if you share a snap on social media. Please
          tag us.
        </p>
        <div className="flex items-center gap-x-[20px] mb-12">
          <button className="bg-[#617453] text-white text-base font-medium py-[16px] px-[40px] rounded-lg">
            Order Now
          </button>
          <div className="text-[24px] font-bold text-[#000]">€150.00</div>
        </div>
        <ul className="flex gap-x-[10px]">
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className="w-8 h-8 rounded-full cursor-pointer"
              ></li>
            );
          })}
        </ul>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 50000 }}
          className="absolute top-36 -right-40 w-[300px]"
        >
          <img src={woman} alt="" draggable="false" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
