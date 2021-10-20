import { Grid } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Footer = () => {
    return(
        <Grid className="footer" container justifyContent="flex-end">
        <ButtonGroup variant="text">
          <Button>Twitter</Button>
          <Button>Facebook</Button>
        </ButtonGroup>
      </Grid>
    )
}


export default Footer;