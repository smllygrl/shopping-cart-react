import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";

const ProductPage = ({ id }) => {
  console.log({ id });
  return (
    <>
      <Header headerTitle="Product Page" />
      <Product id={id} />
    </>
  );
};

export default ProductPage;
