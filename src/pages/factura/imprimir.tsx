import { Box, Button,Modal,Typography } from "@mui/material";
import type { NextPage } from "next";
import imageInicio from "public/citelis-logo-color.png";
import CancelIcon from '@mui/icons-material/Cancel';
import Image from "next/image";
import Navbar from "../../components/navbar";
import { KeyboardBackspace } from "@mui/icons-material";
import { Container } from "@mui/system";
import React from "react";

const style = {
  position: 'absolute' as 'absolute',
  top: '51.5%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '634px',
  height: '437px',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  border: 'solid 1px var(--very-light-pink)',
  boxShadow: 24,
  padding: '16px',
};

const button = {
  float: 'right',
  width: '54px',
  height: '54px',
};
const pageImprimir: NextPage = () => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





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
      <Container className="imageinicio">
        <Image src={imageInicio} />
      </Container>
      <Box className="content-text">
        <Typography className="title-imprimir" variant="h5" gutterBottom>
          TU FACTURA HA SIDO ENVIADA AL CORREO:
        </Typography>
        <Typography className="title2-imprimir">
          juanitoperez@hotmail.com
        </Typography>
      </Box>

      <Box className="conteiner-button">
        <Button variant="contained" className="conteiner-button1">
          <Typography className="text-button" gutterBottom>
            IMPRIMIR FACTURA
          </Typography>
        </Button>
        <Button onClick={handleOpen}   variant="contained" className="conteiner-button2">
          <Typography className="text-button" gutterBottom>
            TERMINAR
          </Typography>
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         
         <Box sx={style}>
          <Box sx={button} onClick={handleClose}><CancelIcon sx={{ fontSize: "54px" }}/></Box>
          <Box className="box_modal">
          <Typography className="title_modal">
            MUCHAS GRACIAS POR TU PREFERENCIA
          </Typography>
          <Typography className="subtitle_modal">
            Puedes recoger tu factura impresa en recepción.
          </Typography>
          <Button className="buttonSecundaryModal"><Typography className="textButtonModal">TERMINAR OPERACIÓN</Typography></Button>
          </Box>
        </Box>
      </Modal>
      </Box>
    </Box>
  );
};

export default pageImprimir;
