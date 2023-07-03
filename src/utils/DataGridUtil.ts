import { useTranslation } from "react-i18next";
import { ReactElement } from "react";

export function getColumnTitle(data: ReactElement) {
  const { t } = useTranslation();
  if (data) {
    let columnHeading = data.props.header
      ? data.props.header
      : data.props.children;

    if (!data.props.header && data.props.children.includes(".")) {
      const lastWord = columnHeading.match(/([^.]*)$/gm);
      columnHeading = lastWord !== null ? lastWord[0] : data.props.children;
    }

    columnHeading = t(columnHeading);

    columnHeading = columnHeading.replace(/_|-|\./gm, " ");
    columnHeading = columnHeading.replace(/\b(\w)/gm, (firstLetter: string) =>
      firstLetter.toUpperCase()
    );

    return columnHeading;
  } else return "unknown heading";
}
