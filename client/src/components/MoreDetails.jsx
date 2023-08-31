import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCarContext } from '../pages/CarContext';



const MoreDetails = () => {
    const { selectedCarId } = useCarContext();

  const [carDetails, setCarDetails] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:5000/api/crossovers/${selectedCarId}`)
      .then((res) => {
        setCarDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedCarId]);

 
  
    return (
        <>
       
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">

                <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Car Details / {carDetails.carName}</p>
                    <h2 className="font-semibold lg:text-6xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{carDetails.carName}</h2>

                    <div className=" flex flex-row justify-between">
                        <div className=" flex flex-row space-x-3">
                        <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="5">5</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="4">4</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="3">3</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="2">2</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="1">1</label>
  </div>
                        </div>
                    </div>
                        <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">22 Reviews</p>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-3">{carDetails.carDesc}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-3">{carDetails.carPrice} TND
                    <span className='mx-3 text-sm text-slate-600 uppercase'>Per Day</span>
                    </p>

                    <div className="lg:mt-4 mt-10">
                        <hr className=" bg-gray-200 w-full my-2" />
                        <div className=" block flex-row justify-between items-center mt-4">
                            <p className="font-medium text-base leading-4 uppercase text-gray-600"><span className='text-gray-500'>Car Category :</span> {carDetails.carCategory}</p><br/>
                            <p className="font-medium text-base leading-4 uppercase text-gray-600"><span className='text-gray-500'>Car Location :</span> {carDetails.carLocation}</p><br/>
                            <p className="font-medium text-base leading-4 uppercase text-gray-600 tracking-wide leading-5"><span className='text-gray-500'>Car Specs :</span> {carDetails.carSpecs}</p><br/>
                            <p className="font-medium text-base leading-4 uppercase text-gray-600"><span className='text-gray-500'>Car Engine Type :</span> {carDetails.carEngineType}</p><br/>
                            <p className="font-medium text-base leading-4 uppercase text-gray-600"><span className='text-gray-500'>Car Passenger Capacity :</span> {carDetails.carPassengerCapacity}</p><br/>
                        </div>
                        <hr className=" bg-gray-200 w-full mt-4" />
                    </div>

                    <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 uppercase w-full py-5">Rent it now</button>
                </div>



                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12 border flex justify-center items-center">
                        <img src={carDetails.carIMG} alt={carDetails.carName} />
                    </div>
                    <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div className="flex justify-center items-center border py-4">
                            <img src={carDetails.carIMG} alt={carDetails.carName} />
                        </div>
                        <div className="flex justify-center border items-center py-4">
                            <img src={carDetails.carIMG} alt={carDetails.carName} />
                        </div>
                        <div className="flex justify-center border items-center py-4">
                            <img src={carDetails.carIMG} alt={carDetails.carName} />
                        </div>
                    </div>
                    </div>
                </div>
              
            </div>
          
        
        </>
    );
};

export default MoreDetails;
