import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productID, setProductID] = useState("");

  // Below is the getter and setter of the context
  const data = { productID, setProductID };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
