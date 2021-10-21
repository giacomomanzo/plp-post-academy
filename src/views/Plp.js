import { Grid } from "@mui/material";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const Plp = () => {
    let initialValue;
  const [value, setValue] = useState(initialValue);
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = () => {
      fetch(
        "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
      )
        .then((res) => res.json())
        .then((res) => {
          setInitialProducts(res);
          setProducts(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    loadProducts();
  }, []);

  const setFilteredProducts = (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = initialProducts.filter((item) => {
      return item.name.toLowerCase().includes(searchString);
    });
    setProducts(filteredProducts);
    setValue(searchString);
  };

  const setInStockProducts = () => {
    const InStockProducts = initialProducts.filter((item) => {
      return item.availability.stock >= 1;
    });
    setProducts(InStockProducts);
  };
  const setOutOfStockProducts = () => {
    const outOfStockProducts = initialProducts.filter((item) => {
      return item.availability.stock === 0;
    });
    setProducts(outOfStockProducts);
  };
    return (
        <Grid container direction="column" minHeight="100vh">
      <Grid item xs={12}>
        <Header
          setInStockProducts={setInStockProducts}
          setOutOfStockProducts={setOutOfStockProducts}
          initialValue={initialValue}
          value={value}
          setFilteredProducts={setFilteredProducts}
          initialProducts={initialProducts}
          setProducts={setProducts}
          setValue={setValue}
        />
      </Grid>
      <Grid item xs={12}>
        <CardList products={products} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
    )
}


export default Plp;