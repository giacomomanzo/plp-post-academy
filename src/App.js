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
  const [initialProducts, setInitialProducts] = useState([])
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

  fetch(
    "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
  )
    .then((res) => res.json())
    .then((res) => {
      setInitialProducts(res);
    })

  const setFilteredProducts = (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = initialProducts.filter((item) => {
      return item.name.toLowerCase().includes(searchString);
    });
    setProducts(filteredProducts);
    setValue(searchString);
  }

  const setInStockProducts = () => {
    const InStockProducts = initialProducts.filter((item) => {
      return item.availability.stock >= 1;
    })
    setProducts(InStockProducts)
  }

  const setOutOfStockProducts = () => {
    const OutOfStockProducts = initialProducts.filter((item) => {
      return item.availability.stock === 0;
    })
    setProducts(OutOfStockProducts)
  }

  return (
    <div className="App">
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
      <Grid container className="card-container" justifyContent="flex-start" gap={2}>
        {products.map((item, index) => (
          <Card className="card" key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image="https://via.placeholder.com/350x350"
                alt=""
              />
              <CardContent component="div">
                <Typography variant="h5" component="p">
                  {item.name}
                </Typography>
                <Typography variant="p" color="black">
                  {`$ ${item.price.current.value}`}
                </Typography>
              </CardContent>
            <CardActions>
            <Typography variant="p" color="black">
              {`in stock: ${item.availability.stock}`}
                </Typography>
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
