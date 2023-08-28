import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
  <>
<header class="bg-white dark:bg-black">
  <Navbar />
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button class="w-3 h-3 mx-2 bg-yellow-500 rounded-full md:mx-0 focus:outline-none"></button>
                <button class="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
                <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">The best Apple Watch apps</h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div class="mt-6">
                    <a href="#" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Download from App Store</a>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://www.bmw-me.com/content/dam/bmw/common/all-models/x-series/x5/2023/navigation/bmw-x-series-x5-40i-modelfinder.png.asset.1675188101445.png" alt="apple watch photo" />
        </div>
    </div>
</header>
  </>
  )
}

export default Hero