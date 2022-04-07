import { Link } from "react-router-dom";

const ShoppingCartButton = () => {
  return (
    <button>
      <Link to="/cart">CART</Link>
    </button>
  );
};

export default ShoppingCartButton;
