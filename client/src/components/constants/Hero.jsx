import React from 'react'


const Hero = () => {
  return (
  <>
<header className="bg-white dark:bg-black">
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 h-screen md:h-128 md:py-4 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2" 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        >
            <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button className="w-3 h-3 mx-2 bg-yellow-500 rounded-full md:mx-0 focus:outline-none"></button>
                <button className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-500"></button>
                <button className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-500"></button>
                <button className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-500"></button>
            </div>

            <div className="max-w-lg md:mx-12 md:order-2">
                <h1 className="text-3xl font-kanit font-medium tracking-wide text-gray-800 dark:text-white md:text-6xl">Discover Tunisia's Beauty on Wheels with TunisianAutoTrek</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Uncover Tunisia's wonders on your terms with <span className='text-yellow-500 font-bold capitalize'>TunisianAutoTrek</span>'s premium rental cars.</p>
                <div className="mt-6">
<a href="#_" className="relative tracking-wide inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black uppercase text-xl">Learn More</span>
</a>

             </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-96 h-96 md:w-1/2">
            <img className="object-cover w-full h-full rounded-md" src="https://purepng.com/public/uploads/large/purepng.com-land-roverland-roverfour-wheel-drive-vehiclesjaguar-land-roverland-rover-vehicles-17015275054957uggo.png" alt="apple watch photo" />
        </div>
    </div>
</header>
  </>
  )
}

export default Hero