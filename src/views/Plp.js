import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { Grid } from "@mui/material";

const Plp = ({ products }) => {
  const [value, setValue] = useState("");
  const [inStock, setInStock] = useState(undefined);

  const setInStockProducts = () => {
    switch(inStock) {
      case (undefined) :
      setInStock(true)
      break;
      default :
      setInStock(undefined)
    } 
  };
  const setOutOfStockProducts = () => {
    switch(inStock) {
      case (undefined) :
      setInStock(false)
      break;
      default :
      setInStock(undefined)
    } 
  };
  console.log(inStock)
  
  return (
    <Grid container minHeight="100vh" direction="column">
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
        container
        item
        xs={12}
        spacing={2}
        direction="row"
        minHeight="83vh"
        padding={2}
      >
        {products
          .filter(product => product.name.toLowerCase().includes(value))
          .filter((product) =>
            inStock === undefined ? true : inStock
              ? product.availability.stock > 0
              : product.availability.stock === 0
          )
          .map((product) => (
            <ProductCard product={product} key={product.UPC} />
          ))}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Plp;
