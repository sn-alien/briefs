import { grey, red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    themeName?: string;
  }
}
const themeName = "Light";

const theme = createTheme({
  palette: {
    primary: {
      main: "#46D5B3",
      light: "#98E8D4",
      dark: "#31D0AA",
    },
    secondary: {
      main: "#EF5DA8",
      light: "#F17BB8",
      dark: "#ED4B9E",
    },
  },
  themeName,
});

const muiTheme = responsiveFontSizes(theme);

export default muiTheme;
