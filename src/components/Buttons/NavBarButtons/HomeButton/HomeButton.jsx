import { Link } from "react-router-dom";
import "../NavBarButton.scss";

const HomeButton = () => {
  return (
    <button className="navBar__cmpnt">
      <Link to="/">HOME</Link>
    </button>
  );
};

export default HomeButton;
