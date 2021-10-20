import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";

const CardList = () => {
    return(
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
    )
} 

export default CardList;