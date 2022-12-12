
import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../../components/navbar";
import imageLogo from "public/citelis-logo-color.png";
import styles from "../../styles/Login.module.css"
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import Footer from "../../components/footer";
import GoogleIcon from '@mui/icons-material/Google';
import React from "react";

const Login: NextPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const packageAutocajaFirebase = require("package-autocaja-firebase")

  return (
  <Box className="content">
    <Navbar />

    <Box className={styles.contentBox} width="1080px" height="1920px">
      <Box className={styles.texto_encima}>
        <Box className={styles.logoBox}>
        <Image src={imageLogo}/>
        </Box>

        <Typography className={styles.titleBienvenido}>
          CAJA DE PAGO DIGITAL
        </Typography>
        <Typography className={styles.title_pago}>
          Ingresa tus datos para acceder al sistema de caja de pago digital.
        </Typography>  
        <Box className={styles.boxForm}>
            <Typography className={styles.titleLogin}>*Usuario</Typography>
            <TextField     sx={{
        width: { sm: 200, md: 300 },
        "& .MuiInputBase-root": {
            height: 80}}} 
            variant="outlined"  InputLabelProps={{style: {fontSize: 32}}}  className={styles.textField} label="Ingresa tu usuario" value={email}  onChange={(e) => setEmail(e.target.value)}></TextField>
            <Typography className={styles.titleLogin}>*Contraseña</Typography>
            <TextField sx={{
        width: { sm: 200, md: 300 },
        "& .MuiInputBase-root": {
            height: 80
        }
    }} variant="outlined"  InputLabelProps={{style: {fontSize: 32}}} className={styles.textField} label="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
        </Box>
          <Box className={styles.boxButtons}>
            <Button variant="contained" className={styles.buttonPrimary} onClick={async () => packageAutocajaFirebase.logInWithEmailAndPassword(email,password)}>
              <Typography className={styles.text_button} gutterBottom>
                Ingresar
              </Typography>
            </Button>
            <Box border={1}
                 borderColor="grey" className={styles.buttonSecundary}>
                <Box sx={{width: '20%', marginLeft: '-100px'}}><GoogleIcon sx={{fontSize: '62px'}}/></Box>
                <Box sx={{width: '70%'}}>
                  <Typography className={styles.text_button} gutterBottom>   
                  Ingresa con google
                  </Typography>
            </Box>
            </Box>  
          </Box>

      </Box>
      <Footer/>
      
    </Box>
  </Box>
  );
};

export default Login;