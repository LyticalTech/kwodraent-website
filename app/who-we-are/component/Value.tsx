'use client';

import Container from '@/components/Container';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";

const Value = () => {
  return (
    <>
      {/* ================= BLACK SECTION ================= */}
      <section className="w-full py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h2 className="text-sm text-white flex items-center gap-3 uppercase tracking-wider">
                <div className="w-6 h-[2px] bg-blue-500" />
                Mission
              </h2>

              <h3 className="text-white font-thin text-4xl ">
                Our Mission
              </h3>

              <div className="w-full h-[2px] bg-white/20" />

              <p className="text-white text-base leading-relaxed font-thin max-w-xl">
                Create sustainable solutions that improve quality of life
                and meet society's evolving needs.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h2 className="text-sm text-white flex items-center gap-3 uppercase tracking-wider">
                <div className="w-6 h-[2px] bg-blue-500" />
                Vision
              </h2>

              <h3 className="text-white font-thin text-4xl ">
                Our Vision
              </h3>

              <div className="w-full h-[2px] bg-white/20" />

              <p className="text-white text-base leading-relaxed font-thin max-w-xl">
                To become a global leader in innovative and sustainable
                solutions that shape the future of industries and communities.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>


      {/* ================= CORE VALUES SECTION ================= */}
<section className="w-full py-24 bg-black">
  <Container>
    {/* 3 column grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">

      {/* LEFT BIG (2/3 width) */}
      <div className="flex flex-col gap-8 lg:col-span-2">
        <h1 className="text-5xl  text-white font-normal max-w-xl">
          Our Core Values
        </h1>

        <img
          src="/assets/KD group 5.png"
          alt="core values"
          className="w-full h-[520px] object-cover rounded-2xl"
        />
      </div>

      {/* RIGHT CARDS (1/3 width) */}
      <div className="flex flex-col gap-6">

        {/* CARD 1 */}
        <div className="p-2">
          <span className="text-[#143CFF] font-medium text-3xl ">.01</span>
          <h3 className="text-xl  text-white mt-2 font-medium mb-2">
            Smart Automation
          </h3>
          <p className="text-gray-300 font-light leading-relaxed">
            Set things in motion with just a few steps. No endless forms,
            no clutter, just a clean start that gets you moving fast.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-2">
          <span className="text-[#143CFF] text-3xl font-medium ">.02</span>
          <h3 className="text-xl  text-white font-medium mt-2 mb-2">
            Seamless Collaboration
          </h3>
          <p className="text-gray-300 font-light leading-relaxed">
            Bring everyone on the same page instantly. Our system adapts
            to your workflow, not the other way around.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-2">
          <span className="text-[#143CFF] font-medium text-3xl ">.03</span>
          <h3 className="text-xl  text-white font-medium mt-2 mb-2">
            Scalable Growth
          </h3>
          <p className="text-gray-300 font-light leading-relaxed">
            Once you're in, everything expands seamlessly. One place,
            one system, zero resistance.
          </p>
        </div>

        {/* BUTTON */}
        <button className="mt-6 w-fit bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition flex items-center gap-2">
          Explore More <GoArrowUpRight />
        </button>

      </div>
    </div>
  </Container>
</section>

    </>
  );
};

export default Value;
