const ProductCard = ({ image, name, price, inStock, isNew }) => {
  return (
    <div className="card">
      <img src={image} width= "150" />

      <h3>{name}</h3>
      <p>${price}</p>

      {inStock ? (
        <p>In Stock</p>
      ) : (
        <p>Out of Stock</p>
      )}

      {isNew && <p>New Arrival</p>}
    </div>
  );
};

export default ProductCard;