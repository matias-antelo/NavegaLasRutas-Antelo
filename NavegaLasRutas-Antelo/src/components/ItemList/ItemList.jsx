import Item from "../Item/Item";

const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos para mostrar</p>;
  }

  return (
    <div>
      {products.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          title={prod.title}
          price={prod.price}
          thumbnail={prod.thumbnail}
        />
      ))}
    </div>
  );
};

export default ItemList;

