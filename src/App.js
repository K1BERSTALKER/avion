import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Basket, Product } from "./pages/index.js";
import { Navbar, Footer } from "./Components/index.js";

import "./sass/index.scss"
import { ShopContextProvider } from "./context/ShopContext.jsx";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/basket" Component={Basket} />
          <Route path="/product/:id" Component={Product} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
