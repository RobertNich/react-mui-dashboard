import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { useAtom } from "jotai";
import { AppBar } from "../components/main-layout/AppBar";
import { SideBar } from "../components/main-layout/SideBar";
import { sideBarOpenAtom } from "../services/UiService";

const drawerWidthOpen = 240;
const drawerWidthClosed = 65;

export const MainLayout = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const theme = useTheme();
  const [open, setOpen] = useAtom(sideBarOpenAtom);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        open={open as boolean}
        drawerWidthOpen={drawerWidthOpen}
        drawerWidthClosed={drawerWidthClosed}
      />
      <SideBar
        open={open as boolean}
        drawerWidthOpen={drawerWidthOpen}
        drawerWidthClosed={drawerWidthClosed}
        handleDrawer={handleDrawer}
      />
      <Paper
        component="main"
        sx={{
          width: `calc(100% - ${open ? drawerWidthOpen : drawerWidthClosed}px)`,
          height: 1,
          position: "fixed",
          top: 0,
          left: open ? drawerWidthOpen : drawerWidthClosed,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <DrawerHeader />
        <Box sx={{ p: 2, overflowY: "scroll", height: "90%" }}>
          <Outlet />
        </Box>
      </Paper>
    </>
  );
};
