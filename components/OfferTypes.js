import React from 'react';
import { Icon } from '@iconify/react'; // Assuming you are using Iconify for icons

const OfferTypes = () => {
  const offers = [
    {
      title: 'With Material',
      description: 'We offer complete fabrication services where we supply the materials required for your project. From steel to custom alloys, we ensure the highest quality materials and precise fabrication.',
      icon: 'mdi:material-ui',
      buttonText: 'Learn More',
    },
    {
      title: 'Without Material',
      description: 'If you already have the materials for your project, we offer fabrication services using your supplied materials. Our experienced team ensures that your designs are crafted with precision and attention to detail.',
      icon: 'mdi:factory',
      buttonText: 'Learn More',
    },
  ];

  return (
    <div className="py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Our Services: With or Without Material</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 text-4xl mb-4">
                <Icon icon={offer.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{offer.title}</h3>
              <p className="text-gray-700 mb-4">{offer.description}</p>
              <button
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                {offer.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferTypes;
