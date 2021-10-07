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
    // Name of the component
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        colorPrimary: {
          // Some CSS
          color: "#d3d3d3",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "rounded", color: "primary" },
          style: {
            borderRadius: "50px",
          },
        },
      ],
    },
  },
});
