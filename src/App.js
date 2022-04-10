import HomePage from "./pages/HomePage/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useState } from "react";
import ProductProvider from "./services/contexts/ProductContext/ProductContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <ProductProvider>
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
    </ProductProvider>
  );
};

export default App;
