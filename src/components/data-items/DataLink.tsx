import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import _ from "lodash";

type DataLinkType<T = any> = {
  children: string;
  url: string;
  useValue?: boolean;
  header?: string;
  data?: T;
};

export const DataLink = ({ children, url, useValue, data }: DataLinkType) => {
  if (data) {
    const item = _.get(data, children, children);
    let link = url;

    if (useValue) {
      link = link.replace("{value}", item);
    }

    return (
      <Link to={`/app/${link}`}>
        <Typography>{item}</Typography>
      </Link>
    );
  }
  return null;
};
