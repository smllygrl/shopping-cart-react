import { useEffect, useState } from "react";
import "./TestProducts.scss";

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
    <div className="products">
      <header className="products__header">
        <h1 className="products__headerText">These are all the products</h1>
      </header>
      {items.map((item) => {
        return (
          <div key={JSON.stringify(item.id)} className="products__container">
            <p className="products__title">{JSON.stringify(item.title)}</p>
            <img className="products__image" src={item.image} />
            <p className="products__price">${item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestProducts;

// - Clean off " from beginning and end of title
// - Clean data before placing in return (no login in return)
// - Add bool somewhere: in cart? Y/N
