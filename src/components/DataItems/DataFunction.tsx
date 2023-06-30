import { Typography } from "@mui/material";
import _ from "lodash";

type DataFunctionProps = {
  fn: (data: any) => string | number;
  header: string;
  data?: any;
};

export const DataFunction = ({ fn, data }: DataFunctionProps) => {
  if (data) {
    const functionReturn = fn(data);
    return <Typography>{functionReturn}</Typography>;
  }
  return null;
};
