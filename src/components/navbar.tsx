import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logomazda from "public/citelis-logo-blanco.png";

const Navbar = () => {
  return (
    <div >
      
      <AppBar color="primary" className="appbar" position="absolute">
      <Toolbar variant="dense">
        <Image
          src={logomazda}
          alt="Logo de Mazda"
          height="88.2px"
          width="388.5px"
          
        ></Image>
        <Box>
          <Typography
            fontFamily={"Metropolis-Medium"}
            width="500px"
            height="44px"
            margin="22px"
            fontWeight={"50px"}
            fontStyle="normal"
            line-height="1.57"
            letterSpacing={"0.74px"}
            color="#dedede"
            fontSize={"37px"}
            paddingLeft={"45%"}
          >
            Caja de pago
          </Typography>
        </Box>
      </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
