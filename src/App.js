import "./App.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
function App() {
  let initialValue;
  const [value, setValue] = useState(initialValue);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = () => {
      fetch(
        "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
      )
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    loadProducts();
  }, []);

  const setInitialProducts = () => {
    fetch(
      "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
    setValue("");
  }

  return (
    <div className="App">
      <Grid container justifyContent="space-between" alignItems="center" className="header">
        <Box component="img" src="https://via.placeholder.com/150x80" alt="" className="box-logo"></Box>
        <ButtonGroup size="small">
          <Button sx={{height: 50}}>IN STOCK</Button>
          <Button sx={{height: 50}}>OUT OF STOCK</Button>
        </ButtonGroup>
        <div>
          <TextField
            component = "form"
            placeholder="search"
            defaultValue={initialValue}
            value={value}
            onChange={(e) => {
              const searchString = e.target.value.toLowerCase();
              const filteredProducts = products.filter((item) => {
                return item.name.toLowerCase().includes(searchString);
              });
              setProducts(filteredProducts);
              setValue(searchString);
            }}
          >
            <Button variant="contained" onClick={setInitialProducts}>
              RESET
            </Button>
          </TextField>
        </div>
      </Grid>
      <Grid container columnGap={2} columns={4} gridTemplateRows={2} rowGap={2} style={{height: 110+"%"}}>
        {products.map((item, index) => (
          <Card style={{ height: 500, width: 450 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="350"
                image="https://via.placeholder.com/350"
                alt=""
              />
              <CardContent component="div">
                <Typography variant="h5" component="p">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="black">
                  {`$ ${item.price.current.value}`}
                </Typography>
              </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                in stock
              </Button>
            </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <Grid className="footer" container justifyContent="flex-end">
        <ButtonGroup variant="text">
          <Button>Twitter</Button>
          <Button>Facebook</Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
}

export default App;
