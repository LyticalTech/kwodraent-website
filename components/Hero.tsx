import Container from '@/components/Container';

const Hero = () => {
  return (
    <section className='w-full min-h-screen bg-blue-500 border-b border-white flex flex-col justify-end pb-24'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-40'>
          {/* LEFT */}
          <h1 className='text-4xl lg:text-6xl text-white leading-tight'>
            Engineering for a <br /> sustainable future
          </h1>

          {/* RIGHT */}
          <div className='max-w-md lg:pl-12'>
            <p className='text-sm text-white leading-relaxed'>
              Join hundreds of businesses switching to solar. We provide complete solar systems that reduce costs and help the
              environment.
            </p>

            <button className='mt-10 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition'>
              Explore solutions
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
