import { Button } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { MuiButtonVariant, MuiButtonColor } from "../../types/Common";

//****** */
// Maybe have this as a seperate DataFnButton and then add another DataModal
// Because we should only really need to wrap text in a button..
// even then  we might not even have to do that? Just have a DataButton maybe

type FnButtonWrapperType = {
  children: ReactElement;
  color?: MuiButtonColor;
  fn: (args: any) => void;
  fnArgs: any;
  variant?: MuiButtonVariant;
  wrapper: boolean;
};

export const FnButtonWrapper = ({
  children,
  color,
  fn,
  fnArgs,
  variant,
}: FnButtonWrapperType) => {
  return (
    <Button
      onClick={() => fn(fnArgs)}
      color={color || "primary"}
      variant={variant || "text"}
    >
      {children}
    </Button>
  );
};
