// must recieve ID of product from details button

import { useEffect, useState } from "react";
import AddToCartButton from "../Buttons/AddToCartButton/AddToCartButton";

const Product = ({ id }) => {
  const [item, setItem] = useState([]);

  console.log(`https://fakestoreapi.com/products/${id}`);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  return (
    <div className="product">
      <p>{id}</p>
      <div className="product__container">
        <div className="product__header">
          <div className="product__headerTitle">{item.title}</div>
        </div>
        <div className="product__description">{item.description}</div>
        <div className="product__imageCont">
          <img className="product__image" src={item.image} />
        </div>
        <div className="product__priceCont">
          <p className="product__price">${item.price}</p>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default Product;
