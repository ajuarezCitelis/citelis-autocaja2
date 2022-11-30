import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../../components/navbar";
import { useRouter } from 'next/router'
import ButtonRegresar from "../../components/buttonRegresar";

const pagePlaca: NextPage = () => {
  const router = useRouter()

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
      <ButtonRegresar  urls="/"/>
      </Box>

      <Box className="content">
        <Typography className="title2" variant="h5" gutterBottom>
          REALIZA TU PAGO
        </Typography>
        <Container className="rectangulo-placa">
          <Box
            sx={{
              maxWidth: "100%",
            }}
          >
            <FormControl fullWidth variant="outlined" sx={{ width: '650px' }}>
              <Box className="title-placa">  
              <Box className="title-placa2"><Typography   sx={{
              fontSize: "4rem",
               }}>*</Typography>
              <Typography className="label">Ingresa tu No. de Placa </Typography>
              </Box>
            <TextField  fullWidth label="Ingresa tu No. de Placa"   style={{
             backgroundColor: "white"}}/>
            </Box>
            </FormControl>
          </Box>
        </Container>
        <Box paddingTop={"30%"}>
          <Button variant="contained" className="buttonSecundary" onClick={async () => await router.push('/resumen')}>
            <Typography className="text-buttonPlaca" gutterBottom>
              Continuar
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default pagePlaca;
