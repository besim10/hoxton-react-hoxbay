import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import CategoriesDetails from "./pages/CategoriesDetails";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        {
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<CategoriesDetails />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        }
      </main>
    </div>
  );
}

export default App;
