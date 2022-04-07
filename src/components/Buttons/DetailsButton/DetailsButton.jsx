const DetailsButton = (productID) => {
  const getProduct = (productID) => {
    console.log("Details button pressed" + productID);
    console.log(`https://fakestoreapi.com/products/${productID}`);
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
    // console.log(response);
  };
  // on click go get id and go to https://fakestoreapi.com/products/{id}
  return <button onClick={getProduct}>Details</button>;
};

export default DetailsButton;
