import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../services/contexts/ProductContext/ProductContext";

// details button provides context
// product page consumes context and passes it to product

const DetailsButton = ({ id }) => {
  const { setProductID } = useContext(ProductContext);
  const handleClick = async () => {
    setProductID(id);
  };

  return (
    <Link to="/product">
      <button onClick={handleClick}>DETAILS</button>
    </Link>
  );
};

export default DetailsButton;
