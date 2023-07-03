import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

interface Props {
  theme: Theme;
  open: boolean;
  drawerWidthOpen: number;
  drawerWidthClosed: number;
}

const openedMixin = (theme: Theme, drawerWidthOpen: number): CSSObject => ({
  width: drawerWidthOpen,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme, drawerWidthClosed: number): CSSObject => ({
  width: drawerWidthClosed,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidthOpen, drawerWidthClosed }: Props) => ({
  width: drawerWidthOpen,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, drawerWidthOpen),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidthOpen),
  }),
  ...(!open && {
    ...closedMixin(theme, drawerWidthClosed),
    "& .MuiDrawer-paper": closedMixin(theme, drawerWidthClosed),
  }),
}));
