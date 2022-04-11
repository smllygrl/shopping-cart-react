import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const data = { cartItems, setCartItems };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
