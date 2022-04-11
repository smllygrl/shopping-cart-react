import "./AddToCartButton.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../../services/contexts/CartContext/CartContext";
import ProductInCart from "../../ProductsInCart/ProductsInCart";
import ProductForCart from "../../ProductForCart/ProductForCart";

const AddToCartButton = ({ title, imgSRC, price }) => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  const checkIfInCart = () => {
    // see if cart items include title, if yes, see if user wants to add the # to current quantity
    let totalPrice = quantity * price;
    setCartItems(
      <ProductForCart
        title={title}
        imgSRC={imgSRC}
        itemPrice={price}
        totalPrice={totalPrice}
      />
    );
  };

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
