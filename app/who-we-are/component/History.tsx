import React from 'react'
import Container from '../../../components/Container';

const History = () => {
  return (
    <section className="w-full py-20 bg-white">
        <Container>
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Top two-column section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left */}
      <h1 className="text-2xl md:text-5xl leading-tight">
      Our History of Growth 
      </h1>
     
      {/* Right */}
      <div>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
      We go beyond digital infrastructure. We partner with brands to build scalable, future-ready eCommerce experiences. With our expert team and innovative approach, we support businesses to launch and succeed in the digital marketplace.
      </p> 
      {/* Stats cards */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
      
      <div className="flex flex-col items-center justify-center border-l-2 border-gray-200 py-8">
        <h2 className="text-6xl font-bold">10+</h2>
        <p className="text-gray-600 text-base text-center mt-2">
          Years of combined industry experience
        </p>
      </div>

      <div className="flex flex-col items-center justify-center border-l-2 border-gray-200 py-8">
        <h2 className="text-6xl font-bold">500+</h2>
        <p className="text-gray-600 text-base text-center mt-2">
          Stores launched and successfully scaled
        </p>
      </div>

      <div className="flex flex-col items-center justify-center border-l-2 border-gray-200 py-8">
        <h2 className="text-6xl font-bold">95%</h2>
        <p className="text-gray-600 text-base text-center mt-2">
          Customer retention rate
        </p>
      </div>
      </div>

    </div>
    </div>

   
  </div></Container>
</section>

  )
}

export default History