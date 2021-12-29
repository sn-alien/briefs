import { grey, red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    themeName?: string;
  }
}
const themeName = "Light";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#EF5DA8",
      light: "#F17BB8",
      dark: "#ED4B9E",
    },
    secondary: {
      main: "#46D5B3",
      light: "#98E8D4",
      dark: "#31D0AA",
    },
  },
  themeName,
});

const muiTheme = responsiveFontSizes(theme);

export default muiTheme;
