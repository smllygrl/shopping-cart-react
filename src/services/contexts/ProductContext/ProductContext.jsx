import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState("");

  console.log(`Coming from search context: ${product}`);

  const productToRender = { product, setProduct };

  return (
    <ProductContext.Provider value={productToRender}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
