import { Grid } from "@mui/material";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { Product } from "../model/Product"

type Props = {
  products: Product[]
}


const Pdp: React.FC<Props> = ({ products }) => {
  const { upc } = useParams<{ upc: string }>();
  const product = products.find((product) => product.UPC === upc);

  if(product === undefined) {
    return null
  }
  
  return  (
    <Grid>
    <ProductCard product={product} />
    </Grid>
  )
}

export default Pdp;