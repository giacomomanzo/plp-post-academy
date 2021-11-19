import { BrowserRouter, Switch, Route } from "react-router-dom";
import Plp from "./views/Plp";
import Pdp from "./views/Pdp";
import { useState, useEffect } from "react";
import { Product } from "./model/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

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
  
  products.map(
    (product) =>
      (product.imageUrl = `https://picsum.photos/600/400?random=${product.UPC}`)
  );
  products.map((product) =>
    product.variants.map(
      (variant) =>
        (variant.imageUrl = `https://picsum.photos/600/400?random=${variant.UPC}`)
    )
  );

  console.log(products);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product/:upc">
          <Pdp products={products} />
        </Route>
        <Route path="/">
          <Plp products={products} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
