import React from 'react';

const Service = ({ name, description, price, availability }) => {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Availability: {availability}</p>
      {/* Add any additional details or buttons for booking */}
    </div>
  );
};

export default Service;