import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enResource } from "./en";
import { frResource } from "./fr";
import { Languages } from "../../enums/Common";
import { StorageConstants } from "../Constants";

const lang = localStorage.getItem(StorageConstants.Locale);

i18n.use(initReactI18next).init({
  fallbackLng: Languages.ENGLISH,
  lng: lang !== null ? lang : Languages.ENGLISH,
  resources: {
    en: {
      translations: enResource,
    },
    fr: {
      translations: frResource,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.services.formatter!.add("lowercase", (value, _lng, _options) => {
  return value.toLowerCase();
});

i18n.languages = [Languages.ENGLISH, Languages.FRENCH];

export default i18n;
