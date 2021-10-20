import { Box } from "@mui/system";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Header = () => {
    return(
        <Grid container justifyContent="space-between" alignItems="center" className="header">
        <Box component="img" src="https://via.placeholder.com/150x60" alt="" className="box-logo"></Box>
        <ButtonGroup size="small">
          <Button onClick={setInStockProducts} sx={{height: 50}}>IN STOCK</Button>
          <Button onClick={setOutOfStockProducts} sx={{height: 50}}>OUT OF STOCK</Button>
        </ButtonGroup>
        <div>
          <TextField
            component = "form"
            placeholder="search"
            defaultValue={initialValue}
            value={value}
            onChange={setFilteredProducts}
          >
          </TextField>
          <Button sx={{height: 53}} variant="contained" onClick={() => setValue('')}>
              RESET
            </Button>
        </div>
      </Grid>
    )
}


export default Header;