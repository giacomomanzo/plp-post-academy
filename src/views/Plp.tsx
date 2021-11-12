import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Product } from "../model/Product";
import styled from "styled-components";
import { useAppSelector } from "../store/hook";

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
  const searchTerm = useAppSelector((state) => state.searchTerm.value)
  const filter = useAppSelector((state) => state.filter.value)

  return (
    <Container>
      <Header />
      <CardsContainer>
        {products
          .filter((product) => product.name.toLowerCase().includes(searchTerm))
          .filter((product) =>
            filter === undefined
              ? true
              : filter
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
