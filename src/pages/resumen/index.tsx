import {
  Box,
  Button,
  Container,
  Typography
} from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../../components/navbar";
import styles from "../../styles/Resumen.module.css"
import DataGridDemo from "../../components/dataGrid";
import {useState,useEffect } from 'react';
import ModalCard from '../../components/modal';
import ButtonRegresar from "../../components/buttonRegresar";
import { getResumen } from "../../services/resumen";
import placa from "public/placa-citelis.png"
import Image from "next/image";
const pageResumen: NextPage = () => {
interface Resumen{
  data: {
    cliente: string
    fecha: string
    noOrden: string
    noPlaca: string
    servicio: JSON
    unidad: string
  }
}
  const [open,setOpen] = useState(false);
  const [data, setData] = useState<Resumen>();
  const handleEvent = () => {  
      setOpen(true);
    };

    useEffect(()=>{
     resumenData();
    },[])
    const resumenData=async()=>{
      const res=await getResumen();
      setData(res);
    }
    console.log(data?.data?.cliente)
  return    (
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
  <ButtonRegresar  urls="/codigo"/>

  </Box>
  <Box className="content">
        <Typography className="title2" variant="h5" gutterBottom>
         TICKET DE SERVICIO
        </Typography>
        <Container className={styles.rectangulo}>
          <Box
            sx={{
              maxWidth: "100%",
                        }}
          >
           <Box className={styles.formBox}>
            <Box className={styles.TextRight}>
            <Box className={styles.Texts}>
                          <Typography className={styles.title}>CLIENTE</Typography>
                          <Typography className={styles.descripcionNombre}>{data?.data?.cliente}</Typography>
              </Box>
              <Box className={styles.Texts}>
                          <Typography className={styles.title}>UNIDAD</Typography>
                          <Typography className={styles.descripcion}>Mazda 2 Sedán</Typography>
              </Box>
              <Box className={styles.Texts}>
                          <Typography className={styles.title}>AGENCIA</Typography>
                          <Typography className={styles.descripcion}>Mazda Ravisa</Typography>
              </Box>

            </Box>
            <Box className={styles.TextLeft}>
              
            <Box className={styles.Texts2}>
                          <Typography className={styles.title}>FECHA</Typography>
                          <Typography className={styles.descripcionFecha}>20/09/2022</Typography>
              </Box>
              <Box className={styles.Texts2}>
                          <Typography className={styles.title}>NO.DE ORDEN</Typography>
                          <Typography className={styles.descripcion}>D123509-A3</Typography>
              </Box>
              <Box className={styles.Texts2}>
                          <Typography className={styles.title}>NO.DE PLACA</Typography>
                          <Image src={placa} className={styles.descripcion} />
              </Box>
            </Box>
           </Box>
           <Box className={styles.tableGrid}>
                          <DataGridDemo/>
           </Box>
           <Box className={styles.totalBox}>
            <Typography className={styles.total}>Total</Typography>
            <Typography className={styles.totalPrice} >$1,700.00</Typography>
            </Box>
          </Box>
        </Container>

  </Box>
      <Box className={styles.boxButtons}>
            <Button variant="contained" className={styles.buttonSecundary} onClick={handleEvent}>
              <Typography className={styles.text_button} gutterBottom>
                PAGAR SERVICIO
              </Typography>
            </Button>
        </Box>
        <Box className={styles.boxButtonss} >

              <Typography className={styles.text_button2} gutterBottom>
                CANCELAR OPERACIÓN
              </Typography>
        </Box>
        <>{open? <ModalCard setOpen={setOpen}  />:""} </>

  </Box>
  
  );
};

export default pageResumen;
