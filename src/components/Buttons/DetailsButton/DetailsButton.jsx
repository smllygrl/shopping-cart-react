import { Link } from "react-router-dom";

const DetailsButton = ({ id }) => {
  const handleClick = () => {
    console.log(`Detail button pressed on item with id: ${id}`);
  };

  return (
    <button onClick={handleClick}>
      <Link to="/product">DETAILS</Link>
    </button>
  );
};

export default DetailsButton;
