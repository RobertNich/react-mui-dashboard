import { Typography } from "@mui/material";
import dayjs from "dayjs";
import _ from "lodash";

type DataDateProps = {
  children: string;
  header?: string;
  data?: any;
  format?: string;
};

export const DataDate = ({ children, data, format }: DataDateProps) => {
  if (data) {
    const time = _.get(data, children, children);
    const timeFormat = format ? format : "DD/MM/YYYY - HH:mm";
    const convertedTime = dayjs(time).format(timeFormat);
    return <Typography>{convertedTime.toString()}</Typography>;
  }
  return null;
};
