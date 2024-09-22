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
  
  const SmallStyledButton = styled(Button)({

    
    fontSize:"8px",
    background:"#ffbd38",
    borderRadius:"5rem",
    height:"20px",
    ":hover":{background:"black", color:"#ffbd38",border:"2px groove #ffbd38"},
    
  });
  
  export  {StyledButton , CardStyledButton,SmallStyledButton};
