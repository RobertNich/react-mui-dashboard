import { Typography } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useAtom } from "jotai";
import _ from "lodash";
import { timezoneAtom } from "../../services/UiService";

dayjs.extend(utc);
dayjs.extend(timezone);

type DataDateProps = {
  children: string;
  header?: string;
  data?: any;
  format?: string;
};

export const DataDate = ({ children, data, format }: DataDateProps) => {
  const [timezone] = useAtom(timezoneAtom);

  if (data) {
    const time = _.get(data, children, children);
    const timeFormat = format ? format : "DD/MM/YYYY - HH:mm";
    const convertedTime = dayjs.utc(time).tz(timezone).format(timeFormat);
    return <Typography>{convertedTime.toString()}</Typography>;
  }
  return null;
};
