import { createContext, useState } from "react";

// ternary = conditional operator
// condition ? toDoIfTrue : toDoIfFalse

// const itemToAdd = {
//   title: title,
//   imgSRC: imgSRC,
//   quantity: quantity,
//   itemPrice: price,
//   totalPrice: totalPrice,
// };

const doesExistInCart = (cartItemToCheck, cartItems) => {
  return cartItems.find(
    (itemInCart) => itemInCart.title === cartItemToCheck.title
  );
  // If the title of the item to check matches the title of any item in the cart, return true
  // Returns undefined if no item matches
};

const updateQuantity = (itemInCart, theSameItem) => {
  const newQuantity = itemInCart.quantity + theSameItem.quantity;
  return newQuantity;
};

const updateTotalPriceOfItem = (itemInCart, theSameItem) => {
  const newTotalPrice =
    itemInCart.totalPrice + theSameItem.quantity * theSameItem.itemPrice;
  return newTotalPrice;
};

const addCartItem = (cartItems, prouctToAdd) => {
  if (doesExistInCart) {
    return cartItems.map((itemInCart) =>
      itemInCart.title === prouctToAdd.title
        ? {
            ...itemInCart,
            quantity: updateQuantity(itemInCart, prouctToAdd),
            totalPrice: updateTotalPriceOfItem(itemInCart, prouctToAdd),
          }
        : ""
    );
    // If the item exists in the cart, find that item, and add the quantity of the new addition to the original one
  } else {
    // Otherwise, add the product to cart items
    return [...cartItems, { ...prouctToAdd }];
  }
};

export const CartContext = createContext({
  addCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (prouctToAdd) => {
    setCartItems(addCartItem(cartItems, prouctToAdd));
  };

  const data = { cartItems, setCartItems, addItemToCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
