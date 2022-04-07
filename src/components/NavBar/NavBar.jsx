import ShoppingCartButton from "../Buttons/NavBarButtons/ShoppingCartButton/ShoppingCartButton";
import HomeButton from "../Buttons/NavBarButtons/HomeButton";
import DarkModeButton from "../Buttons/NavBarButtons/DarkModeButton";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <HomeButton />
        <ShoppingCartButton />
      </div>
      <div className="navBar__darkMode">
        <DarkModeButton />
      </div>
    </>
  );
};

export default NavBar;
