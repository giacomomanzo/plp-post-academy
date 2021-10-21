
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const Header = ({
  setInStockProducts,
  setOutOfStockProducts,
  initialValue,
  value,
  setFilteredProducts,
  initialProducts,
  setProducts,
  setValue
}) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      borderBottom="solid 1px"
    >
      <img
        component="img"
        src="https://via.placeholder.com/150x95"
        alt=""
      ></img>
      <ButtonGroup size="small">
        <Button onClick={setInStockProducts} sx={{ height: 50 }}>
          IN STOCK
        </Button>
        <Button onClick={setOutOfStockProducts} sx={{ height: 50 }}>
          OUT OF STOCK
        </Button>
      </ButtonGroup>
      <div>
        <TextField
          component="form"
          placeholder="search"
          defaultValue={initialValue}
          value={value}
          onChange={setFilteredProducts}
        ></TextField>
        <Button
          sx={{ height: 53 }}
          variant="contained"
          onClick={() => {
            setProducts(initialProducts);
            setValue("");
          }}
        >
          RESET
        </Button>
      </div>
    </Grid>
  );
};

export default Header;
