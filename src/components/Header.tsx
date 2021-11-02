import Navigation from "./Navigation";
import { Grid } from "@mui/material";
import Search from "./Search";

type Props = {
  setInStockProducts: () => void
  setOutOfStockProducts: () => void
  inStock?: boolean
  value: string
  setValue: (value: string) => void
}

const Header: React.FC<Props> = ({
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
      <Grid item xs={4}>
        <Search value={value} setValue={setValue}/>
      </Grid>
    </Grid>
  );
};

export default Header;