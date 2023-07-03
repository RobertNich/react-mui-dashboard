import { Typography } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import _ from "lodash";
import Countdown, { zeroPad } from "react-countdown";
import { useTheme } from "@mui/material/styles";
import { MainCountdown } from "../common/MainCountdown";

dayjs.extend(utc);
dayjs.extend(timezone);

type DataDateProps = {
  children: string;
  header?: string;
  data?: any;
  format?: string;
};

export const DataCountdown = ({ children, data }: DataDateProps) => {
  if (data) {
    const time = _.get(data, children, children);
    return <MainCountdown time={time} />;
  }

  return null;
};
