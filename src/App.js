import HomePage from "./pages/HomePage/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
