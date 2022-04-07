import "./Header.scss";

const Header = ({ headerTitle }) => {
  return (
    <header className="header">
      <div className="header__textcontainer">
        <h1 className="header__text">{headerTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
