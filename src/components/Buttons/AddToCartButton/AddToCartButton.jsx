import "./AddToCartButton.scss";
import { useState } from "react";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const addOne = () => {
    setQuantity(quantity + 1);
  };

  const minusOne = () => {
    if (quantity === 0) {
      console.log("Quantity cannot be less than one");
    } else {
      setQuantity(quantity - 1);
    }
  };

  const confirmAdd = () => {
    // ??
    if (quantity === 0) {
      console.log("Can only add quantity of 1 or more items to cart");
    } else {
      console.log("Item added to cart");
      setQuantity(0);
    }
    // item details and quantity must be passed to shopping cart
  };

  return (
    <div className="addToCart">
      <button onClick={addOne} className="addToCart__addOne">
        +
      </button>
      <p className="addToCart__quantity">{quantity}</p>
      <button onClick={minusOne} className="addToCart__minusOne">
        -
      </button>
      <button onClick={confirmAdd} className="addToCart__confirmAdd">
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCartButton;
