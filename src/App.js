import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";


function App() {
  const [value, setValue] = useState("");
  const [inStock, setInStock] = useState(true);
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
  const setInStockProducts = () => {
    setInStock(true)
  };
  const setOutOfStockProducts = () => {
    setInStock(false)
  };

  const filterProducts = (product) => {
    return value ? product.name.toLowerCase().includes(value) : true
  }
  
  return (
    <Grid container direction="column" minHeight="100vh">
      <Grid item xs={12}>
        <Header
          setInStockProducts={setInStockProducts}
          setOutOfStockProducts={setOutOfStockProducts}
          inStock={inStock}
          value={value}
          setValue={setValue}
        />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        gap="30px"
        p={2}
        minHeight="80vh"
      >
        {products
          .filter(filterProducts)
          .filter((product) => (inStock ? product.availability.stock > 0 : product.availability.stock === 0))
          .map((product) => (
            <ProductCard product={product} />
          ))}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
