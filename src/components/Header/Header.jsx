import "./Header.scss";
import ShoppingCartButton from "../ShoppingCartButton";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

const Header = () => {
  return (
    <header className="header">
      <div className="header__textcontainer">
        <h1 className="header__text">My Random Item Store</h1>
        <ShoppingCartButton />
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
