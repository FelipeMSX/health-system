import { createTheme } from "@mui/material/styles";
import { green, purple, common, blue, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1b2330",
    },
    secondary: {
      main: "#252f3e",
    },
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: {
          color: "#d3d3d3",
        },
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          height: "36.5px",
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
  },
});
