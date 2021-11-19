import { useParams } from "react-router";
import { Product } from "../model/Product";
import Header from "../components/Header";
import PdpFooter from "../components/PdpFooter";
import PdpProductCard from "../components/PdpProductCard";

type Props = {
  products: Product[];
};

const Pdp: React.FC<Props> = ({ products }) => {
  const { upc } = useParams<{ upc: string }>();
  const product = products.find((product) => product.UPC === upc);
  if (product === undefined) {
    return null;
  }

  return (
    <div className="pdp-cont">
      <Header></Header>
      <PdpProductCard product={product}></PdpProductCard>
      <PdpFooter></PdpFooter>
    </div>
  );
};

export default Pdp;
