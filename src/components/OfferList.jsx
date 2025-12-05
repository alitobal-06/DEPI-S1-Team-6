import React from "react";
import "../assets/OfferList.css";
import OfferCard from "./OfferCard";

function OfferList({ offers }) {
  // Handle empty offers
  if (!offers || offers.length === 0) {
    return <p style={{ color: '#777', padding: '20px' }}>No specific offers available currently.</p>;
  }

  return (
    <div className="offers-grid">
      {offers.map((item, index) => (
        <OfferCard key={item.id || index} {...item} />
      ))}
    </div>
  );
}

export default OfferList;