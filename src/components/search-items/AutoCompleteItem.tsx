import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";

// Need to change other search components to handle onChange in the pages itself instead of the component directly

type Props = {
  label: string;
  data: any[];
  helpText: string;
};

export const AutoCompleteItem = ({ label, data, helpText }: Props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const loading = data.length === 0;
  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      options={data}
      onChange={(event) => handleInputChange(event)}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          value={input}
          helperText={helpText}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
