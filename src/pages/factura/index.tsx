import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../../components/navbar";

import { KeyboardBackspace } from "@mui/icons-material";

const pageFactura: NextPage = () => {
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
        <Button
          size="large"
          color="inherit"
          startIcon={<KeyboardBackspace />}
          variant="text"
        >
          Regresar
        </Button>
      </Box>

      <Box className="content">
        <Typography className="title2" variant="h5" gutterBottom>
          SOLICITA TU FACTURA
        </Typography>
        <Typography className="title3">Ingresa tu información</Typography>
      </Box>
      <Container className="rectangulo-factura">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <Typography className="label"> *R.F.C </Typography>
              <TextField fullWidth label="Ingrese su RFC" />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <FormControl fullWidth variant="outlined">
              <Typography className="label"> *Nombre(s) </Typography>
              <TextField fullWidth label="Ingresa tu(s) nombre(s)" />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <Typography className="label"> *Apellidos </Typography>
              <TextField fullWidth label="Ingresa tus apellidos" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl  fullWidth variant="outlined">
              <Typography paddingBottom={"1%"} className="label"> *Correo electronico </Typography>
              <TextField fullWidth label="Ingresa tu correo electronico" />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <Typography className="label"> *Codigo postal</Typography>
              <TextField fullWidth label="Ingresa tu codigo postal" />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <Typography className="label"> *Forma de pago</Typography>
              <OutlinedInput id="outlined-adornment-weight" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <Typography className="label"> *Régimen fiscal </Typography>
              <Select>
                <MenuItem value={10}>Fiscal</MenuItem>
                <MenuItem value={20}>Moral</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography className="label"> *CFDI </Typography>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-select-currency-native"
                select
                label="CFDI"
                helperText="Selecciona la opcion correspondiente"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">G01</InputAdornment>
                  ),
                }}
              >
                <MenuItem value={10}>Adquisición de mercancía</MenuItem>
                <MenuItem value={20}>Gastos generales</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
        </Grid>
        <Box paddingTop={"5%"}>
          <Button variant="contained" className="button-factura">
            <Typography className="text-button" gutterBottom>
             ENVIAR DATOS
            </Typography>
          </Button>
        </Box>
      </Container>
   
    </Box>
  );
};

export default pageFactura;
