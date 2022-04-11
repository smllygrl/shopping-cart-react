import Header from "../../components/Header";
import ProductsInCart from "../../components/ProductsInCart/ProductsInCart";

const ShoppingCartPage = () => {
  return (
    <div>
      <Header headerTitle={"Shopping Cart"} />
      <ProductsInCart />
    </div>
  );
};

export default ShoppingCartPage;
