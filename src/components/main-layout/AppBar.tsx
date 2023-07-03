import { Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useTranslation } from "react-i18next";

interface IProps {
  open: boolean;
  drawerWidthOpen: number;
  drawerWidthClosed: number;
}

export const AppBar = ({
  open,
  drawerWidthOpen,
  drawerWidthClosed,
}: IProps) => {
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidthClosed}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidthOpen,
      width: `calc(100% - ${drawerWidthOpen}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const { t } = useTranslation();

  return (
    <AppBar position="fixed" open={open as boolean}>
      <Toolbar>
        <Typography variant="h3" noWrap component="div">
          {t("language")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
