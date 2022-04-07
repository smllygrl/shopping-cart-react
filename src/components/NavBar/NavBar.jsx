import ShoppingCartButton from "../Buttons/NavBarButtons/ShoppingCartButton/ShoppingCartButton";
import HomeButton from "../Buttons/NavBarButtons/HomeButton";
import DarkModeButton from "../Buttons/NavBarButtons/DarkModeButton";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__buttons">
        <HomeButton />
        <ShoppingCartButton />
        <DarkModeButton />
      </div>
    </div>
  );
};

export default NavBar;
