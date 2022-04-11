import HomePage from "./pages/HomePage/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useContext, useState } from "react";
import ProductProvider from "./services/contexts/ProductContext/ProductContext";
import {
  CartContext,
  CartProvider,
} from "./services/contexts/CartContext/CartContext";

const App = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/cart"
              element={<ShoppingCartPage itemsInCart={cartItems} />}
            ></Route>
            <Route path="/product" element={<ProductPage />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
