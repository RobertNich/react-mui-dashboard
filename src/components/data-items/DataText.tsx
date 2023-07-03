import { Typography } from "@mui/material";
import _ from "lodash";

type DataTextProps<T = any> = {
  children: string;
  header?: string;
  data?: T;
};

export const DataText = ({ children, data }: DataTextProps) => {
  if (data) {
    const text = _.get(data, children, children);
    return <Typography>{text}</Typography>;
  }
  return null;
};
