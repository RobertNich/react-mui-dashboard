import { IconButton, Divider, Stack, Box, useTheme } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAtom } from "jotai";
import { isDarkModeAtom } from "../../services/UiService";
import { ThemeSwitch } from "./ThemeSwitch";
import { Drawer } from "./SideBar.styles";
import { SideBarItems } from "./SideBarItems";
import { TimezoneButton } from "./TimezoneButton";

interface IProps {
  open: boolean;
  drawerWidthOpen: number;
  drawerWidthClosed: number;
  handleDrawer: () => void;
}

export const SideBar = ({
  open,
  drawerWidthOpen,
  drawerWidthClosed,
  handleDrawer,
}: IProps) => {
  const [darkMode, setDarkMode] = useAtom(isDarkModeAtom);
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      theme={theme}
      open={open}
      drawerWidthOpen={drawerWidthOpen}
      drawerWidthClosed={drawerWidthClosed}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          direction={open ? "row" : "column"}
          alignItems="center"
          justifyContent={"space-evenly"}
        >
          <TimezoneButton />
          <ThemeSwitch
            checked={darkMode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDarkMode(e.target.checked)
            }
          />
          <IconButton onClick={handleDrawer}>
            {open ? <FaChevronLeft /> : <FaChevronRight />}
          </IconButton>
        </Stack>

        <Divider />
        <SideBarItems open={open} />
      </Box>
    </Drawer>
  );
};
