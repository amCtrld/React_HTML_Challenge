import React from 'react';

const FeatureCards = () => {
  const cards = [
    {
      title: "Treat yourself to our best combo",
      button: "Get",
      img: "../images/pork.jpg"
    },
    {
      title: "Check out our today’s offer",
      button: "On Offer",
      img: "/images/meat.jpg"
    },
  ];

  return (
    <section className="flex justify-center space-x-8 py-10">
      {cards.map((card, index) => (
        <div key={index} className="text-center">
          <img
            src={card.img}
            alt={card.title}
            className="rounded-full shadow-lg w-60 h-60 object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <button className="bg-purple-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-purple-600">
            {card.button}
          </button>
        </div>
      ))}
    </section>
  );
};

export default FeatureCards;
