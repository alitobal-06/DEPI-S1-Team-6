import '../assets/RelatedItem.css';

function RelatedItem({title, shortDesc, price, unit, img}) {
  return (
    <div className="related-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <p className="rel-details">{shortDesc}</p>
        <p className="price">{price} {unit}</p>
      </div>
    </div>
  );
}

export default RelatedItem;
