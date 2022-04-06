import { useEffect, useState } from "react";

const TestProducts = () => {
  const [items, setItems] = useState([]);

  // returns 20 products on mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  console.log(items);

  return (
    <div className="allProducts__container">
      <h2>These are all the products</h2>

      {items.map((item) => {
        return (
          <div key={JSON.stringify(item.id)} className="product__container">
            <p className="product__title">{JSON.stringify(item.title)}</p>
            <img className="product__image" src={item.image} />
            <p className="product__price">${item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestProducts;
