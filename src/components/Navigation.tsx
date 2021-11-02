import { ButtonGroup, Button } from "@mui/material";

type Props = {
  setInStockProducts: () => void
  setOutOfStockProducts: () => void
  inStock?: boolean
}

const Navigation: React.FC<Props> = ({inStock, setInStockProducts, setOutOfStockProducts}) => {
    return (
        <ButtonGroup >
          <Button variant={inStock === true ? "contained" : "outlined"} onClick={setInStockProducts} >
            IN STOCK
          </Button>
          <Button variant={inStock === false ? "contained" : "outlined"}  onClick={setOutOfStockProducts}>
            OUT OF STOCK
          </Button>
        </ButtonGroup>
    )
}

export default Navigation;