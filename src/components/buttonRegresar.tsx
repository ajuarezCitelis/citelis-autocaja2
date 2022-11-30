
import {
    Button
  } from "@mui/material";
  import { KeyboardBackspace } from "@mui/icons-material";
  import { useRouter } from 'next/router'


  const ButtonRegresar = ({urls} : any) => {
    
    const router = useRouter()
    return (
        <Button
        size="large"
        color="inherit"
        startIcon={<KeyboardBackspace />}
        variant="text"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={async () => await router.push({pathname: urls})}
      >
        Regresar
      </Button>
    );
  };
  export default ButtonRegresar;
  