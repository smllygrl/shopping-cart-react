const ProductsInCart = () => {
  // This is where cartItems is mapped through to be rendered

  // useEffect on render

  // add edit quantity function (maybe just an add to cart button??)

  return (
    <div className="cartItem__container">
      <h3 className="cartItem__title">This is a cart item</h3>
      <p className="cartItem__image"></p>
      <p className="cartItem__quantity">{quantity}</p>
      <p className="cartItem__price">{item.price} per unit</p>
      <p className="cartItem__totalPrice">
        {item.price}x{quantity}
      </p>
    </div>
  );
};

export default ProductsInCart;
