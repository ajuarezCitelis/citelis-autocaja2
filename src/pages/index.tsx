import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/navbar";
import imageLogo from "public/citelis-logo-color.png";
import imageBienvenida from "public/home-caja-citelis.png";
import styles from "../styles/Home.module.css"
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import Footer from "../components/footer";
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  return (
  <Box className="content">
    <Navbar />
    <Box className={styles.contentBox} width="1080px" height="1920px">
      <Box className={styles.texto_encima}>
        
        <Box className={styles.logoBox}>
        <Image src={imageLogo}/>
        </Box>

        <Typography className={styles.titleBienvenido}>
          BIENVENIDO A LA CAJA DE PAGO DIGITAL
        </Typography>
        <Box className={styles.imgBienvenida}>
        <Image src={imageBienvenida}/>
        </Box>
        <Typography className={styles.title_pago}>
          Para realizar tu pago ingresa tu placa o escanea tu ticket
        </Typography>  
          <Box className={styles.boxButtons}>
            <Button variant="contained" className={styles.buttonSecundary} onClick={async () => await router.push('/placa')}>
              <Typography className={styles.text_button} gutterBottom>
                Ingresa tu placa
              </Typography>
            </Button>
            <Button variant="contained" className={styles.buttonSecundary} onClick={async () => await router.push('/codigo')}>
              <Typography className={styles.text_button} gutterBottom>
              Escanear Ticket
              </Typography>
            </Button>  
          </Box>

      </Box>
      <Footer/>
      
    </Box>
  </Box>
  );
};

export default Home;
