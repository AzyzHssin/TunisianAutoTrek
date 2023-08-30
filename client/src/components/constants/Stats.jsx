import React from "react";

const Stats = () => {
  return (
    <div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-black text-white">
        <h2 className="text-center text-4xl py-12 font-bold uppercase">
         Facts by the numbers
        </h2>
        <p className="text-center text-xl pb-20 px-24 font-bold capitalize">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cupiditate nemo alias?
        </p>
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">674+</h6>
            <p class="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase text-yellow-400 lg:text-base">
              happy costomers 
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">140+</h6>
            <p class="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase lg:text-base">
              Count of cars
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">48</h6>
            <p class="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase lg:text-base">
              Car center solutions
            </p>
          </div>
          <div class="text-center">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">30.1k</h6>
            <p class="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase lg:text-base">
              Total kilometers+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
