import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
const theme = createTheme({
    palette: {
      primary: {
        main:grey[800],
      },
      secondary:{
        main:grey[100]
      },
      text:{
        primary:grey[800],
        secondary:grey[700]
      }
    },
    typography:{
      fontFamily:"Poppins,sans-serif",
    },
    components:{
        MuiIconButton:{
            styleOverrides:{
                root:{
                    color:"black"
                }
            },
            defaultProps:{
                disableRipple:true
            }
        }
    }}
);

export default theme;