import { useTranslation } from "react-i18next";
import { ReactElement } from "react";

export function getColumnTitle(data: ReactElement) {
  if (data) {
    let columnHeading = data.props.header
      ? data.props.header
      : data.props.children;

    if (!data.props.header && data.props.children.includes(".")) {
      const lastWord = columnHeading.match(/([^.]*)$/gm);
      columnHeading = lastWord !== null ? lastWord[0] : data.props.children;
    }

    columnHeading = formatAndLocalise(columnHeading);

    return columnHeading;
  } else return "unknown heading";
}

export function formatAndLocalise(data: any) {
  const { t } = useTranslation();
  let text = t(data);
  text = text.replace(/_|-|\./gm, " ");
  text = text.replace(/\b(\w)/gm, (firstLetter: string) =>
    firstLetter.toUpperCase()
  );

  return text;
}
