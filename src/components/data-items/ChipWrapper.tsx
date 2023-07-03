import { Chip } from "@mui/material";
import { ReactElement } from "react";
import { MuiChipVariant, MuiChipColor } from "../../types/Common";

type ChipWrapperType = {
  children: ReactElement;
  color?: MuiChipColor;
  variant?: MuiChipVariant;
  wrapper: boolean;
};

export const ChipWrapper = ({ children, color, variant }: ChipWrapperType) => {
  return (
    <Chip
      variant={variant || "filled"}
      color={color || "primary"}
      label={children}
    />
  );
};
