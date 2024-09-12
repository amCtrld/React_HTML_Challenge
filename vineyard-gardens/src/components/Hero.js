import React from 'react';

const Hero = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-pink-200 to-purple-200 py-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-black mb-6">Today's Special</h2>
        <img
          src="./assets/chicken.png"
          alt="Today's Special"
          className="rounded-full shadow-lg w-96 h-96 object-cover mx-auto"
        />
        <button className="mt-8 bg-purple-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-purple-600">
          Get
        </button>
      </div>
    </section>
  );
};

export default Hero;
