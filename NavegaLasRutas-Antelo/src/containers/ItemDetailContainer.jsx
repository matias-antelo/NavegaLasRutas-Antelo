import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [itemId]);

  if (!product) {
    return <p>Cargando detalle...</p>;
  }
  return (
    <div>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        width={250}
      />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ItemCount stock={product.stock} />
    </div>
  );
};

export default ItemDetailContainer;