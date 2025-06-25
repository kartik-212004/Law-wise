import React from 'react';
import { Location, Guide, Notes } from '../svg/logos';

const cardData = [
  {
    title: 'Describe the Incident',
    description:
      'Tell us what happened in plain language — no legal jargon needed.',
    logo: <Notes />,
  },
  {
    title: 'Enter Your Location',
    description:
      'Add your pin code so we can search laws relevant to your area.',
    logo: <Location />,
  },
  {
    title: 'Get Legal Guidance',
    description:
      'Get clear, actionable advice based on Indian laws. Know your rights instantly.',
    logo: <Guide />,
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 gap-12 px-4 text-white sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 rounded-lg bg-[#254dc409] p-6 text-center shadow-md transition-shadow hover:shadow-xl sm:items-start sm:text-left"
        >
          <div>{card.logo}</div>
          <h3 className="text-lg font-medium">{card.title}</h3>
          <p className="text-sm text-white/80">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
