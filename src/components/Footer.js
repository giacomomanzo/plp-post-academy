import { Grid } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "../App.css"

const Footer = () => {
  return (
    <Grid container justifyContent="flex-end" height="10vh" className="footer">
      <ButtonGroup variant="text">
        <Button>Twitter</Button>
        <Button>Facebook</Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Footer;
