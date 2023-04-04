import React from 'react'
import carousel from '../assets/img/hero-carousel/hero-carousel-3.svg'
const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <img className="w-96" src={carousel} alt="Carousel" />
      </div>
      <div className="text-center mt-10">
        <h1 className="text-5xl">
          Welcome to <span className="text-sky-500">HeroBiz</span>
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, excepturi!
        </p>
      </div>
      <div className="flex justify-center gap-8 mt-5">
        <button className="bg-rose-400 py-2 px-4 rounded-md text-white">
          Get Started
        </button>
        <button className="bg-slate-400 py-2 px-4 rounded-md text-white">
          Watch Video
        </button>
      </div>
    </>
  )
}

export default HeroSection
