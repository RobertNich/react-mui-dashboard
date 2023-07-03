import { Chip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

type MainCountdown = {
  time: string;
};

type countdownType = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

export const MainCountdown = ({ time }: MainCountdown) => {
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.primary.main);

  const renderCountdown = ({
    hours,
    minutes,
    seconds,
    completed,
  }: countdownType) => {
    if (completed) {
      setColor(theme.palette.common.black);
      return <Typography>Over</Typography>;
    }

    if (hours === 3) {
      setColor(theme.palette.primary.main);
      return (
        <Typography>
          {hours}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </Typography>
      );
    }

    if (hours === 2) {
      setColor(theme.palette.secondary.main);
      return (
        <Typography>
          {hours}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </Typography>
      );
    }

    if (hours === 1) {
      setColor(theme.palette.warning.main);
      return (
        <Typography>
          {hours}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </Typography>
      );
    }

    if (hours === 0 && minutes > 0) {
      setColor(theme.palette.error.main);
      return (
        <Typography>
          {minutes}:{zeroPad(seconds)}
        </Typography>
      );
    }

    if (hours <= 0 && minutes <= 0) {
      setColor(theme.palette.error.main);
      return <Typography>{zeroPad(seconds)}s</Typography>;
    } else {
      setColor(theme.palette.success.main);
      return (
        <Typography>
          {hours}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </Typography>
      );
    }
  };

  const date = new Date(time);

  return (
    <>
      <Chip
        label={<Countdown date={date} renderer={renderCountdown} />}
        size="small"
        sx={{ mx: 1, width: "80px" }}
        style={{ backgroundColor: color }}
      />
    </>
  );
};
