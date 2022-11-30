import { Box } from "@mui/system";
import Image from "next/image";
import imageFondo from "public/fondo_mazda.png";

const viewFondo = () => {
  return (
    <div className="Screenfondo">
      <Box margin="0.7px 0 0" height="1920px" width="1080px">
        <Image src={imageFondo} />
      </Box>
    </div>
  );
};

export default viewFondo;
