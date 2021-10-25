import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const ProductCard = ({ product }) => {
    return(
        <Card key={product.upc}>
          <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://via.placeholder.com/350x350"
                alt=""
              />
              <CardContent>
                <Typography variant="h5" component="p">
                  {product.name}
                </Typography>
                <Typography variant="p" color="black">
                  {`$ ${product.price.current.value}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="p" color="black">
                  {`in stock: ${product.availability.stock}`}
                </Typography>
              </CardActions>
          </CardActionArea>
        </Card>
    )
}


export default ProductCard;