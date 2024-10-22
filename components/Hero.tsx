import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="font-mont mt-40 text-center mb-40 lg:ml-14 lg:flex">
      <div>
        <div>
          <h6 className="font-bold text-sm text-orange-300">
            GlowCart Glow In Style
          </h6>
        </div>
        <section>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold w-4/4">
            Discover Your Style Statement with
            <span className="text-orange-300"> GlowCart</span>
          </h1>
          <p className="md:w-72 md:ml-72 md:pt-10 lg:w-80 lg:ml-44 pt-5">
            Explore luxury and sophistication with GlowCart's exclusive
            fashion-forward collection
          </p>
        </section>
        <div>
          <button className="py-5 uppercase mt-20 px-20 rounded-lg text-white bg-orange-500 hover:bg-orange-400 lg:mr-20">
            Discover Now
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/images/undraw_empty_cart_co35.png"
          alt="GlowCart Shopping"
          width={800}
          height={800}
          className="mt-5 md:ml-5 md:mt-5 lg:mt-0 lg:mr-80 lg:ml-0 p-2 rounded-t-full"
        />
      </div>
    </div>
  );
};

export default Hero;
