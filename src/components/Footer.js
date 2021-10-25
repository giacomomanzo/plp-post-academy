import { Grid } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "../Footer.css"

const Footer = () => {
  return (
    <Grid container justifyContent="flex-end" height="10vh" className="footer">
      <ButtonGroup variant="text">
        <Button><a href="https://twitter.com/"  target="_blank"  rel="noreferrer">Twitter</a></Button>
        <Button><a href="https://facebook.com/" target="_blank"  rel="noreferrer">Facebook</a></Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Footer;
