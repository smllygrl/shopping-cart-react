import "./Header.scss";
import DarkModeButton from "../Buttons/DarkModeButton";

const Header = (headerTitle) => {
  return (
    <header className="header">
      <div className="header__textcontainer">
        <h1 className="header__text">{headerTitle}</h1>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
