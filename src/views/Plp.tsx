import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { Product } from "../model/Product";
import styled from "styled-components";

type Props = {
  products: Product[];
};

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex: 1;
    gap: 10px;
    padding: 20px;
`;

const Plp: React.FC<Props> = ({ products }) => {
  const [value, setValue] = useState("");
  const [inStock, setInStock] = useState<boolean | undefined>(undefined);

  const setInStockProducts = () => {
    setInStock(inStock === undefined ? true : undefined);
  };
  const setOutOfStockProducts = () => {
    setInStock(inStock === undefined ? false : undefined);
  };

  return (
    <Container>
      <Header
        setInStockProducts={setInStockProducts}
        setOutOfStockProducts={setOutOfStockProducts}
        inStock={inStock}
        value={value}
        setValue={setValue}
      />
      <CardsContainer>
        {products
          .filter((product) => product.name.toLowerCase().includes(value))
          .filter((product) =>
            inStock === undefined
              ? true
              : inStock
              ? product.availability.stock > 0
              : product.availability.stock === 0
          )
          .map((product) => (
            <ProductCard product={product} key={product.UPC} />
          ))}
      </CardsContainer>
      <Footer />
    </Container>
  );
};

export default Plp;
