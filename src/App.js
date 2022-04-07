import HomePage from "./pages/HomePage/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import DetailsButton from "./components/Buttons/DetailsButton";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <HomePage /> */}
        </Route>
        <Route path="/cart" element={<ShoppingCartPage />}>
          {/* <ShoppingCartPage /> */}
        </Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
