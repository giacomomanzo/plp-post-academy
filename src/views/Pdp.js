import { Grid } from "@mui/material";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";

const Pdp = ({ products }) => {
  const { upc } = useParams();
  const product = products.find((product) => product.UPC === upc);
  return (
    <Grid>
    <ProductCard product={product} />
    <a href="/plp-post-academy">Back</a>
    </Grid>
  )
}

export default Pdp;
