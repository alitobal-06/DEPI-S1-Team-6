import "../assets/OfferCard.css";

function OfferCard({ title, description, img }) {
  return (
    <div className="offer-card">
      <img src={img} alt={title} className="offer-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="offer-btn">View Details</button>
    </div>
  );
}

export default OfferCard;
