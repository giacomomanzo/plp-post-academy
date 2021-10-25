import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Grid item xs={ 3 } >
      <Link to={`/product/${product.UPC}`}>
        <Card>
            <CardMedia
              component="img"
              image="https://via.placeholder.com/350"
              alt=""
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography color="black">
                {`$ ${product.price.current.value}`}
              </Typography>
              <Typography color="black" className="stock-btn" component="div">
                {product.availability.stock > 0 ? "In Stock" : "Out of Stock"}
              </Typography>
            </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductCard;
