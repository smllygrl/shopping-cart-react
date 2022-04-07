import { Link } from "react-router-dom";
import "../NavBarButton.scss";

const ShoppingCartButton = () => {
  return (
    <button className="navBar__cmpnt">
      <Link to="/cart">CART</Link>
    </button>
  );
};

export default ShoppingCartButton;
