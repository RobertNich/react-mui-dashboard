import { createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LinkProps } from "@mui/material/Link";
import { blue, green, red } from "@mui/material/colors";
import NoirProLight from "../assets/fonts/NoirProLight.woff2";
import NoirProRegular from "../assets/fonts/NoirProRegular.woff2";
import NoirProMedium from "../assets/fonts/NoirProMedium.woff2";
import NoirProSemiBold from "../assets/fonts/NoirProSemiBold.woff2";
import NoirProBold from "../assets/fonts/NoirProBold.woff2";
import NoirProHeavy from "../assets/fonts/NoirProHeavy.woff2";

const customFont = ` @font-face {
  font-family: 'NoirPro';
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: local('NoirPro'), local('NoirPro-Light'), url(${NoirProLight}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

@font-face {
  font-family: 'NoirPro';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local('NoirPro'), local('NoirPro-Regular'), url(${NoirProRegular}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

@font-face {
  font-family: 'NoirPro';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('NoirPro'), local('NoirPro-Regular'), url(${NoirProMedium}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

@font-face {
  font-family: 'NoirPro';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local('NoirPro'), local('NoirPro-SemiBold'), url(${NoirProSemiBold}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

@font-face {
  font-family: 'NoirPro';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local('NoirPro'), local('NoirPro-Bold'), url(${NoirProBold}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}

@font-face {
  font-family: 'NoirPro';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local('NoirPro'), local('NoirPro-Heavy'), url(${NoirProHeavy}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}`;

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#dee4e7",
      paper: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: customFont,
    },
    MuiLink: {
      defaultProps: {
        component: NavLink,
      } as LinkProps,
    },
  },
  typography: {
    fontFamily: "NoirPro, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1f1c35",
      paper: "#353349",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: customFont,
    },
  },
  typography: {
    fontFamily: "NoirPro, sans-serif",
  },
});
