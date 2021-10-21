import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";

const CardList = ({ products }) => {
  return (
    <Grid
      container
      direction="row"
      gap="30px"
      p={2.5}
      minHeight="80vh"
    >
      {products.map((item) => (
        <Card key={item.upc}>
          <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://via.placeholder.com/350x350"
                alt=""
              />
              <CardContent>
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
  );
};

export default CardList;
