import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = ({ bienvenida }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const url = categoryId
          ? `https://dummyjson.com/products/category/${categoryId}`
          : "https://dummyjson.com/products";

        const response = await fetch(url);
        const data = await response.json();

        setTimeout(() => {
          setProducts(data.products ?? []);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container mt-4">
      {bienvenida && <h2 className="text-center mb-4">{bienvenida}</h2>}
      {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
