import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../services/contexts/ProductContext/ProductContext";

const ProductPage = () => {
  const { productID } = useContext(ProductContext);

  return (
    <>
      <Header headerTitle="Product Page" />
      <Product id={productID} />
    </>
  );
};

export default ProductPage;
