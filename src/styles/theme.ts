import { createTheme } from "@mui/material/styles";
import { green, purple, common } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: common.black,
    },
    secondary: {
      main: green[500],
    },
  },
});
