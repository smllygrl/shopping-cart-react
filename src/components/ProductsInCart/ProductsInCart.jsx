import { useContext, useEffect } from "react";
import { CartContext } from "../../services/contexts/CartContext/CartContext";

const ProductsInCart = () => {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log(`Items in the cart: ${cartItems}`);
  }, []);

  return (
    <>
      {cartItems.map(({ item }) => {
        return (
          <div key={item.index} className="cartItem__container">
            <h3 className="cartItem__title">{item.title}</h3>
            <img
              className="cartItem__image"
              src={item.imgSRC}
              alt={item.title}
            />
            <p className="cartItem__quantity">Quantity: {item.quantity}</p>
            <p className="cartItem__price">Price: {item.price}</p>
            <p className="cartItem__totalPrice">{item.totalPrice}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProductsInCart;
