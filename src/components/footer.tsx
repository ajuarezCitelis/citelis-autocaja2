import {
    Box,
    Typography,
  } from "@mui/material";
import styles from "../styles/Home.module.css"
import CopyrightIcon from '@mui/icons-material/Copyright';
  const Footer = () => {
    return (
        <Box className={styles.boxFooter}>
            <Box className={styles.footerText}>
                <Typography className={styles.footerTypo}><CopyrightIcon/> CITELIS 2022. TODOS LOS DERECHOS RESERVADOS</Typography>
            </Box>
        </Box>
    );
  };
  export default Footer;
  