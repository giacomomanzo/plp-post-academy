import { BrowserRouter, Route } from "react-router-dom";
import Plp from "./views/Plp";
import Pdp from "./views/Pdp";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = () => {
      fetch(
        "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
      )
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    loadProducts();
  }, []);

  return (
    <BrowserRouter>
      <Route path="/product/:upc">
        <Pdp products={products} />
      </Route>
      <Route path="/plp-post-academy" exact>
        <Plp products={products} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
