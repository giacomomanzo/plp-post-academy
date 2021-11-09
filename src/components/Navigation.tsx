import styled from "styled-components";
import { Button } from "@mui/material";

type Props = {
  setInStockProducts: () => void
  setOutOfStockProducts: () => void
  inStock?: boolean
}

const StyledButtonGroup = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
const StyledButton = styled(Button)`
    width: fit-content;

    :first-of-type {
      border-style: solid;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    :last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    `;

const Navigation: React.FC<Props> = ({inStock, setInStockProducts, setOutOfStockProducts}) => {
    return (
        <StyledButtonGroup >
          <StyledButton variant={inStock === true ? "contained" : "outlined"} onClick={setInStockProducts} >
          IN STOCK
          </StyledButton>
          <StyledButton variant={inStock === false ? "contained" : "outlined"}  onClick={setOutOfStockProducts}>
            OUT OF STOCK
          </StyledButton>
        </StyledButtonGroup>
    )
}

export default Navigation;