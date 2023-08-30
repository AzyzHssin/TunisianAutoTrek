import React from 'react';


const Banner = () => {
  return (
    <>
      <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto">
            <div className="lg:flex md:flex block justify-between items-center">
              <div className="md:p-10 p-4">
                <h2 className="text-3xl font-palanquin py-8 text-4xl uppercase font-bold leading-9 text-gray-800">
                Onward to Adventure: Choose Tunisian Auto Trek Today!
                </h2>
                <p className="text-base text-xl leading-normal text-gray-600">
                Set your course for excitement with our trusted services
                </p>
              </div>
              <div className="md:p-10 p-4">
                <img
                  src="https://i0.wp.com/sreditingzone.com/wp-content/uploads/2017/10/car-png-13.png?resize=780%2C463&ssl=1"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
