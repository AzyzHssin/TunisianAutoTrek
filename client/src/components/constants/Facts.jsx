import React from 'react';

const Facts = () => {
  const factData = [
    {
      imgSrc: 'https://www.lifeandstylemag.com/wp-content/uploads/2021/10/shutterstock_editorial_12403230k.jpg?resize=1200%2C1200&quality=86&strip=all',
      headline: 'Discover the Luxury of New Brand Cars , Affordable Excellence: Explore Our Competitive Rental Prices',
      description: 'Meet John, a satisfied adventurer who turned his journey into an unforgettable experience with our car rental platform',
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg',
      headline: ' Top-Quality Cars and Great Rental Rates,Unlock Savings: Drive New Brand Cars at Unbeatable Prices',
      description: 'Introducing Sarah, a travel enthusiast who found her perfect ride and more through our car rental website',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80',
      headline: 'Quality Meets Affordability: The Perfect Pairing at TunisianAutoTrek,Driving Dreams',
      description: 'Meet Michael, an adventurer who embarked on a road trip of a lifetime with the help of our car rental platform.',
    },
  ];
  return (
    <div className="facts-container">
      {factData.map((fact, index) => (
        <div className="fact-row" key={index}>
   <img src={fact.imgSrc} alt={`Fact ${index + 1}`} />
          <h2>{fact.headline}</h2>
          <p>{fact.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Facts;
