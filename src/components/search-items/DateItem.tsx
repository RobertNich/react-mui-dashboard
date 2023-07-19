import { DateTimePicker } from "@mui/x-date-pickers";\

// Need to change other search components to handle onChange in the pages itself instead of the component directly


type Props = {
  onChange: (date: string | null) => void;
  label: string;
  date: string;
};

export const DateItem = ({ onChange, label, date }: Props) => {
  return (
    <DateTimePicker
      label={label}
      value={date}
      onChange={(date) => onChange(date)}
    />
  );
};
