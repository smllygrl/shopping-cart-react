import { Link } from "react-router-dom";

// details button provides context
// product page consumes context and passes it to product

const DetailsButton = ({ id }) => {
  const handleClick = () => {
    console.log(`Details button pressed of product with id: ${id} `);
  };

  return (
    <button onClick={handleClick}>
      <Link to="/product">DETAILS</Link>
    </button>
  );
};

export default DetailsButton;
