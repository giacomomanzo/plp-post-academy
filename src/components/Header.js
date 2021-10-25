import Navigation from "./Navigation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const Header = ({
  setInStockProducts,
  setOutOfStockProducts,
  inStock,
  value,
  setValue,
}) => {
  return (
    <Grid container alignItems="center" borderBottom="solid 1px">
      <Grid item xs={4}>
        <img
          src="https://via.placeholder.com/150x80"
          alt=""
          className="img"
        ></img>
      </Grid>
      <Grid item xs={4}>
        <Navigation
          inStock={inStock}
          setInStockProducts={setInStockProducts}
          setOutOfStockProducts={setOutOfStockProducts}
        />
      </Grid>
      <Grid item xs={4} container justifyContent="flex-end">
        <TextField
          component="form"
          placeholder="search"
          value={value}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
        ></TextField>
        <Button
          variant="contained"
          onClick={() => {
            setValue("");
          }}
        >
          RESET
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
