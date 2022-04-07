import ShoppingCartButton from "../Buttons/NavBarButtons/ShoppingCartButton/ShoppingCartButton";
import HomeButton from "../Buttons/NavBarButtons/HomeButton";

const NavBar = () => {
  return (
    <div className="navBar">
      <HomeButton />
      <ShoppingCartButton />
    </div>
  );
};

export default NavBar;
