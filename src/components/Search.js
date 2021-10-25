import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Search = ({ value, setValue }) => {
  return (
    <Grid container alignItems="center" >
      <Grid item xs={8} paddingRight={2}>
        <TextField
          placeholder="search"
          fullWidth={true}
          value={value}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
        ></TextField>
      </Grid>
      <Grid item xs={4}>
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

export default Search;
