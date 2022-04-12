import "./AddToCartButton.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../../services/contexts/CartContext/CartContext";

// const itemToAdd = {
//   title: title,
//   imgSRC: imgSRC,
//   quantity: quantity,
//   itemPrice: price,
//   totalPrice: totalPrice,
// };

const AddToCartButton = ({ title, imgSRC, price }) => {
  const [quantity, setQuantity] = useState(0);
  // const { title, imgSRC, quantityOf, itemPrice, totalPrice } = itemToAdd;
  const { addItemToCart, cartItems } = useContext(CartContext);
  const addProductToCart = () => addItemToCart();

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
    if (quantity === 0) {
      console.log("Can only add quantity of 1 or more items to cart");
    } else {
      const totalPrice = quantity * price;
      const itemToAdd = {
        title: title,
        imgSRC: imgSRC,
        quantity: quantity,
        itemPrice: price,
        totalPrice: totalPrice,
      };
      console.log(itemToAdd); // This is an object
      addProductToCart(itemToAdd);
      console.log(`After addItemToCart: ${cartItems}`);
      setQuantity(0);
    }
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
