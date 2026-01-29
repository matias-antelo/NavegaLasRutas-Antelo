import { Link } from "react-router-dom";

const Item = ({ id, title, price, thumbnail }) => {
  return (
    <div>
      <img src={thumbnail} alt={title} width={150} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;