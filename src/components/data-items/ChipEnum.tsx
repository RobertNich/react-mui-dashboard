import { Chip } from "@mui/material";
import { ReactElement } from "react";
import { MuiChipVariant, MuiChipColor } from "../../types/Common";
import _ from "lodash";

type ChipEnumType<E extends MuiChipColor> = {
  children: ReactElement;
  enumData: E;
  variant?: MuiChipVariant;
  wrapper: boolean;
};

export const ChipEnum = ({
  children,
  enumData,
  variant,
}: ChipEnumType<any>) => {
  if (children.props.data) {
    const { data, children: newChildren } = children.props;
    const item = _.get(data, newChildren, newChildren);
    let color = "primary" as MuiChipColor;

    for (let i = 0; i < Object.keys(enumData).length; i++) {
      if (item === Number(Object.keys(enumData)[i])) {
        color = Object.values(enumData)[i] as MuiChipColor;
        break;
      }
    }

    return (
      <Chip variant={variant || "filled"} color={color} label={children} />
    );
  }
  return null;
};
