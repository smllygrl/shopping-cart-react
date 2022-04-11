const ProductForCart = ({ title, imgSRC, quantity, itemPrice, totalPrice }) => {
  const ProductObject = {
    title: title,
    imgSRC: imgSRC,
    quantity: quantity,
    itemPrice: itemPrice,
    totalPrice: totalPrice,
  };

  return <>{ProductObject}</>;
};

export default ProductForCart;
