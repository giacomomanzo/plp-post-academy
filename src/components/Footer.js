import { Grid } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "../Footer.css"

const Footer = () => {
  return (
    <Grid container justifyContent="flex-end" className="footer" p={2}>
      <ButtonGroup variant="text">
        <Button><a href="https://twitter.com/"  target="_blank"  rel="noreferrer">Twitter</a></Button>
        <Button><a href="https://facebook.com/" target="_blank"  rel="noreferrer">Facebook</a></Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Footer;
