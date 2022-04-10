import { useEffect, useState } from "react";
import ProductProvider from "../../services/contexts/ProductContext/ProductContext";
import { cleanProductsData } from "../../services/CleanData/CleanData";
import AddToCartButton from "../Buttons/AddToCartButton/AddToCartButton";
import DetailsButton from "../Buttons/DetailsButton";
import "./Products.scss";

const Products = () => {
  const [items, setItems] = useState([]);

  // returns 20 products on mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(cleanProductsData(json)));
  }, []);

  return (
    <div className="products">
      <header className="products__header">
        <h1 className="products__headerText">These are all the products</h1>
      </header>
      {items.map((item) => {
        return (
          <div key={item.id} className="products__container">
            <p className="products__title">{item.title}</p>
            <img className="products__image" src={item.image} />
            <p className="products__price">${item.price}</p>
            <AddToCartButton />

            <DetailsButton id={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;

// - Add bool somewhere: in cart? Y/N
