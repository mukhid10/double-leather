import React from "react";

import product1 from '../assets/product1.jpeg'
import product2 from '../assets/product2.jpeg'
import product3 from '../assets/product3.jpeg'


function CardPlan({ title, price, features, isSelect }) {
  return (
    <div className="flex container max-w-5xl mx-auto grid grid-cols-3 space-x-6">
      <div
        className={`bg-white border-orange-500  rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
          isSelect ? "border-red-500" : "border-gray-300"
        }`}
      >
      <img src={product1}/>
      </div>

      <div
        className={`bg-white border-orange-500  rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
          isSelect ? "border-red-500" : "border-gray-300"
        }`}
      >
      <img src={product3}/>
      </div>

      <div
        className={`bg-white border-orange-500  rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
          isSelect ? "border-red-500" : "border-gray-300"
        }`}
      >
      <img src={product3}/>
      </div>

    </div>
  );
}

export default CardPlan;
