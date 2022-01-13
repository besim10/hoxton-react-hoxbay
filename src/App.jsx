import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import CategoriesDetails from "./pages/CategoriesDetails";
import Products from "./pages/Products";

function App() {
  const [products, setProducts] = useState([]);

  const getProductsFromServer = () =>
    fetch("http://localhost:3001/products").then((resp) => resp.json());

  useEffect(() => {
    getProductsFromServer().then((productsFromServer) =>
      setProducts(productsFromServer)
    );
  }, []);
  return (
    <>
      <Header />
      <main>
        {
          <Routes>
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/" element={<Products products={products} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<CategoriesDetails />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
