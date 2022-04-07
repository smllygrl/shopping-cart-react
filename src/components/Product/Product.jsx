import { useEffect, useState } from "react";

const Product = ({ id }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      This is a product
      <p>{id}</p>
    </div>
  );
};

export default Product;
