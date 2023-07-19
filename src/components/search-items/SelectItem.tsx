import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

type SelectOptions = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  options: SelectOptions[];
  helpText: string;
};

// Need to change other search components to handle onChange in the pages itself instead of the component directly

export const SelectItem = ({ label, options, helpText }: Props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        id={label}
        labelId={label}
        label={label}
        onChange={(event) => handleInputChange(event)}
        value={input}
        sx={{ minWidth: 200, maxHeight: 56 }}
      >
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
    </FormControl>
  );
};
