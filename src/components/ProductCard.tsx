import { Link } from "react-router-dom";
import { Product } from "../model/Product";
import styled from "styled-components";

type Props = {
  product: Product;
};

const Card = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`

const CardMedia = styled.img `
  width: 100%;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
`

const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.535;
  margin-left: 10px;
`


const StockChip = styled.div`
  background-color: rgb(228, 228, 228);
  border-radius: 20px;
  padding: 7px;
  width: fit-content;
  text-align: center;
  font-size:12px;
  margin: 10px;
`;



const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.UPC}`}>
        <Card>
          <CardMedia src="https://via.placeholder.com/350" alt=""/>
          <CardContent>
            <StyledP>{product.name}</StyledP>
            <p className="price">{`$ ${product.price.current.value}`}</p>
              {product.availability.stock > 0 ? <StockChip>In Stock</StockChip> : <p></p>}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};



export default ProductCard;
