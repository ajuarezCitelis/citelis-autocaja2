import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../../components/navbar";
import imageLogo from "public/citelis-logo-color.png";
import styles from "../../styles/Termino.module.css"
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import ButtonRegresar from "../../components/buttonRegresar";
const HomeTermino: NextPage = () => {
  return (
<Box className="content">
  <Navbar />
  <Box
    className="content"
    margin="0.7px 0 0"
    height="1920px"
    width="1080px"
  >
  
  </Box>

  <Box className="content2">

  <ButtonRegresar  urls="/resumen"/>

  </Box>
      <Box className={styles.texto_encima}>
        <Box className={styles.logoBox}>
        <Image src={imageLogo}/>
        </Box>

        <Typography className={styles.titleBienvenido}>
        Tu pago ha sido procesado con éxito.
        </Typography>
        <Typography className={styles.title_pago}>
          ¿Deseas solicitar tu factura?
        </Typography>  
     
          <Box className={styles.boxButtons}>
            <Button variant="contained" className={styles.buttonSecundary}>
              <Typography className={styles.text_button} gutterBottom>
                SOLICITAR FACTURA
              </Typography>
            </Button> 
          </Box>
          <Box className={styles.boxButtons} >
              <Typography className={styles.text_buttonInicio} gutterBottom>
                VOLVER AL INICIO 
              </Typography>
          </Box>
      </Box>

    </Box>
  );
};

export default HomeTermino;
