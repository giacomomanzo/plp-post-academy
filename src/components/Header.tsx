import Navigation from "./Navigation";
import Search from "./Search";
import styled from "styled-components";

type Props = {
  setInStockProducts: () => void
  setOutOfStockProducts: () => void
  inStock?: boolean
  value: string
  setValue: (value: string) => void
}

const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Header: React.FC<Props> = ({
  setInStockProducts,
  setOutOfStockProducts,
  inStock,
  value,
  setValue,
}) => {
  return (
    <StyledHeader>
        <img
          src="https://via.placeholder.com/150x80"
          alt=""
          className="img"
        ></img>
        <Navigation
          inStock={inStock}
          setInStockProducts={setInStockProducts}
          setOutOfStockProducts={setOutOfStockProducts}
        />
        <Search value={value} setValue={setValue}/>
    </StyledHeader>
  );
};



export default Header;