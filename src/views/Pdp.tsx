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
    <div className="pdp-cont">
    <ProductCard product={product} />
    </div>
  )
}

export default Pdp;