import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { FaClock } from "react-icons/fa";
import { timezoneAtom } from "../../services/UiService";
import { useAtom } from "jotai";
import dayjs from "dayjs";
import "dayjs/plugin/timezone";

export const TimezoneButton = () => {
  const [timezone, setTimezone] = useAtom(timezoneAtom);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (timezone: string) => {
    setAnchorEl(null);
    setTimezone(timezone);
    dayjs.tz.setDefault(timezone);
  };

  const timezoneParts = timezone.split("/");
  const timezoneCity = timezoneParts.length > 1 ? timezoneParts[1] : timezone;

  return (
    <>
      <Button
        variant="text"
        sx={{ color: "white" }}
        startIcon={<FaClock />}
        size="small"
        onClick={handleClick}
      >
        <Typography>{timezoneCity}</Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("Australia/Darwin")}>
          Darwin
        </MenuItem>
        <MenuItem onClick={() => handleClose("America/New_York")}>
          New York
        </MenuItem>
        <MenuItem onClick={() => handleClose("Asia/Taipei")}>Taipei</MenuItem>
      </Menu>
    </>
  );
};
