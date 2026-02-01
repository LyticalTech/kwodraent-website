import React from 'react'

const Solutions = () => {
  return (
    <section className="w-full py-12 px-4 bg-[#212121] overflow-hidden">
    <div className="max-w-7xl mx-auto ">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            What we help you build
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Powerful solutions designed to scale, convert, and retain customers.
          </p>
        </div>
  
        {/* Navigation arrows */}
        <div className="hidden md:flex gap-3">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            ←
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            →
          </button>
        </div>
      </div>
  
      {/* Overflowing tags */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          
          <div className="min-w-110 h-150 bg-gray-100 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Product Design
          </div>
  
          <div className="min-w-110 h-150 bg-gray-100 rounded-2xl flex items-center justify-center text-xl font-semibold">
            E-commerce
          </div>
  
          <div className="min-w-110 h-150 bg-gray-100 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Growth Marketing
          </div>
  
          <div className="min-w-110 h-150 bg-gray-100 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Engineering
          </div>
  
        </div>
      </div>
  
    </div>
  </section>
  
  )
}

export default Solutions