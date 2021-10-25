import { ButtonGroup, Button } from "@mui/material";

const Navigation = ({inStock, setInStockProducts, setOutOfStockProducts}) => {
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