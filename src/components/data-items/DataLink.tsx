import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import _ from "lodash";

type DataLinkType<T = any> = {
  children: string;
  url: string;
  useValue?: boolean;
  otherValue?: string;
  header?: string;
  data?: T;
};

export const DataLink = ({
  children,
  url,
  useValue,
  otherValue,
  data,
}: DataLinkType) => {
  if (data) {
    const item = _.get(data, children, children);
    let link = url;

    if (otherValue) {
      const otherItem = _.get(data, otherValue, children);
      link = link.replace("{value}", otherItem);
    } else if (useValue) {
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
