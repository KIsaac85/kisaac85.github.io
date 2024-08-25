import {Button} from '@mui/material';
import {styled} from "@mui/material/styles";


const StyledButton = styled(Button)({

  
    background:"#ffbd38",
    borderRadius:"10rem",
    ":hover":{background:"black", color:"#ffbd38",border:"2px groove #ffbd38"},
    
  });



 

  const CardStyledButton = styled(Button)({

  
    
    color:"black",
    
    ":hover":{background:"#ffffff",  color:"#ffbd38"},
    
  });

  
  export  {StyledButton , CardStyledButton};
