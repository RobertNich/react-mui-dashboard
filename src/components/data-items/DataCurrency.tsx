import { Typography } from "@mui/material";
import _ from "lodash";

type DataCurrencyProps = {
  children: string;
  header?: string;
  data?: any;
};

export const DataCurrency = ({ children, data }: DataCurrencyProps) => {
  if (data) {
    const parsedData = _.get(data, children, children);
    const convertedData = parseInt(parsedData) * 0.01;
    const currency = Number(convertedData)
      .toFixed(2)
      .replace(/\.?0+$/, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return <Typography>${currency}</Typography>;
  }
  return null;
};
