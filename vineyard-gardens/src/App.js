import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div className="min-h-screen bg-purple-100">
      <Header />
      <main className="flex flex-col lg:flex-row justify-between p-6">
        
        {/* Left Side: Welcome Message, Menu Button, and Cards */}
        <div className="lg:w-1/2 flex flex-col justify-start items-start space-y-6">
          {/* Welcome Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-green-600">Welcome to VineYard Gardens</h2>
            <p className="text-xl text-gray-500">Where every meal tells a story.</p>
          </div>

          {/* View Menu Button */}
          <div className="w-full flex justify-center lg:justify-start">
            <button className="bg-white shadow-md text-green-600 font-bold py-2 px-6 rounded-full flex items-center space-x-2">
              <span>View Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" />
              </svg>
            </button>
          </div>

          {/* Two Cards: "Get" and "On Offer" */}
          <div className="w-full flex justify-center lg:justify-start space-x-4">
            {/* Get Card */}
            <div className="bg-white shadow-md w-1/2 text-center p-4 rounded-lg">
              <img src="/images/meat.jpg" alt="Best Combo" className="w-full h-24 object-cover rounded-md mb-2" />
              <p className="text-gray-600">Treat yourself to our best combo</p>
              <button className="mt-2 bg-green-600 text-white py-1 px-4 rounded-full">Get</button>
            </div>

            {/* On Offer Card */}
            <div className="bg-white shadow-md w-1/2 text-center p-4 rounded-lg">
              <img src="/images/pork.jpg" alt="Today's Offer" className="w-full h-24 object-cover rounded-md mb-2" />
              <p className="text-gray-600">Check out our today's offer</p>
              <button className="mt-2 bg-yellow-600 text-white py-1 px-4 rounded-full">On Offer</button>
            </div>
          </div>
        </div>

        {/* Right Side: Hero Section */}
        <div className="lg:w-2/3 flex flex-col justify-center items-center lg:items-end mt-8 lg:mt-0">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg shadow-md text-center w-full lg:w-3/4">
            <h2 className="text-4xl font-bold text-white mb-4">Today's Special</h2>
            <img src="/images/chicken.png" alt="Today's Special" className="w-full h-48 object-cover rounded-md mb-4" />
            <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full">Get</button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
