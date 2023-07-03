import { Typography } from "@mui/material";
import _ from "lodash";
import { formatAndLocalise } from "../../utils/DataGridUtil";

type ChipEnumType<E = any, T = any> = {
  children: string;
  enumData: E;
  data?: T;
};

export const DataEnum = ({ children, enumData, data }: ChipEnumType<any>) => {
  if (data) {
    const item = _.get(data, children, children);
    let text = "";

    for (let i = 0; i < Object.keys(enumData).length; i++) {
      if (item === Object.values(enumData)[i]) {
        text = Object.keys(enumData)[i];
        break;
      }
    }

    text = formatAndLocalise(text);

    return <Typography>{text}</Typography>;
  }
  return null;
};
