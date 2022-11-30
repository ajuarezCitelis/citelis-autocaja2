import {
  Box,
  Typography,
  Container
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import imageEscaner from "public/imagenes_escanear.png";
import Image from "next/image";
import Navbar from "../../components/navbar";
import styles from "../../styles/Codigo.module.css"
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import ButtonRegresar from "../../components/buttonRegresar";
const pageCodigo: NextPage = () => {
  const router = useRouter()

  return (
    <Box className="content">
    <Navbar />

    <Box className={styles.contentBox} >


      <Box className={styles.texto_encima}>
        
      <Box className={styles.boxRegresar}>       
      <ButtonRegresar  urls="/"/>
      </Box>
      <Typography className={styles.title} variant="h5" gutterBottom>
          REALIZA TU PAGO
        </Typography>
      </Box>
      <Container className={styles.rectangulo_codigo}>
        <Box className={styles.imagen}><Image src={imageEscaner}/></Box>
        <Typography className={styles.texto_codigo}>
          Coloca tu código QR debajo del escáner que se encuentra en la parte inferior de la pantalla
        </Typography>
        </Container>

      <Box className={styles.boxFooter} onClick={async () => await router.push('/resumen')}>
            <Box className={styles.footerText}>
              <Box>
              <Typography className={styles.footerTypo}>Escáner QR </Typography>

              <ExpandCircleDownIcon className={styles.icon}style={{ fill: 'white' }}/> 
                </Box>
            </Box>
        </Box>
      
    </Box>
  </Box>
  );
};

export default pageCodigo;
