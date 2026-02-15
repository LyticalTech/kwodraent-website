'use client';

import Image from 'next/image';
import Container from '@/components/Container';

const Hero = () => {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <Container>
        <div className="flex flex-col items-start w-full gap-6">

          {/* TOP LABEL */}
          <h1 className="flex items-center mt-16 gap-3 text-sm md:text-base text-black">
            <span className="inline-block w-4 h-0.5 bg-blue-500" />
            Subsidiaries
          </h1>

          {/* HEADING */}
          <div className="flex flex-col gap-3 max-w-3xl">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Effortlessly manage your accounting
            </h2>

            <p className="text-black text-sm md:text-base max-w-xl">
              Easily manage your invoices and taxes in one place, saving time and effort.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] mt-10 overflow-hidden rounded-2xl">
            <Image
              src="/assets/Placeholder for subsidiaries.png"
              alt="Background"
              fill
              className="object-cover"
            />

            {/* DARK OVERLAY FOR READABILITY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT WRAPPER — positioned at bottom */}
            <div className="absolute inset-0 flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end p-6 md:p-10 gap-6">
              
              {/* LEFT */}
              <div className="w-full md:max-w-md text-white md:text-left mt-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
                  Stronger Together Offices
                </h2>
                <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                  As part of industry alliances, we can offer expanded capabilities and expertise to customers, and take advantage of a deep pool of subsea knowledge.
                </p>
              </div>

              {/* RIGHT */}
              <div className="w-full md:max-w-md text-white md:text-left mt-4 md:mt-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
                  Global Reach
                </h2>
                <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                  These partnerships allow us to deliver subsea projects of any scale anywhere in the world, with operational facilities in various geographies tailored to the asset management requirements of the regions they serve.
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
