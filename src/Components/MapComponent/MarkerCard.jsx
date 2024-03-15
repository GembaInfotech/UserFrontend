// MarkerCard.js
import React from 'react';

function MarkerCard({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h1 className="text-xl font-bold">{data.pn}</h1>
      <h3 className="text-lg">{data.pa}</h3>
      {/* Add more details if needed */}
    </div>
  );
}

export default MarkerCard;
