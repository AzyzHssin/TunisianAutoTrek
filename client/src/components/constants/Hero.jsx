import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
  <>
<header class="bg-white dark:bg-black">
  <Navbar />
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 h-screen md:h-128 md:py-4 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button class="w-3 h-3 mx-2 bg-yellow-500 rounded-full md:mx-0 focus:outline-none"></button>
                <button class="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-500"></button>
                <button class="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-500"></button>
                <button class="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-500"></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
                <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">Discover Tunisia's Beauty on Wheels with TunisianAutoTrek</h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300">Uncover Tunisia's wonders on your terms with <span className='text-yellow-500 font-bold capitalize'>TunisianAutoTrek</span>'s premium rental cars.</p>
                <div class="mt-6">
                {/* <a href="#_" class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-yellow-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
Learn More
</a>  */}  
<a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
</a>

             </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-96 h-96 md:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://www.bmw-me.com/content/dam/bmw/common/all-models/x-series/x5/2023/navigation/bmw-x-series-x5-40i-modelfinder.png.asset.1675188101445.png" alt="apple watch photo" />
        </div>
    </div>
</header>
  </>
  )
}

export default Hero