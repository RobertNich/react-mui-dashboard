import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Getter } from "jotai/vanilla";
import { StorageConstants } from "../utils/Constants";

export const isDarkModeAtom = atomWithStorage(StorageConstants.DarkMode, false);
export const localeAtom = atomWithStorage(StorageConstants.Locale, "en");
export const timezoneAtom = atomWithStorage(
  StorageConstants.Timezone,
  "Australia/Darwin"
);

const sideBarOpenStorageAtom = atomWithStorage(
  StorageConstants.SideBarOpen,
  true
);
export const sideBarOpenAtom = atom(
  window.innerWidth < 800
    ? false
    : (get: Getter) => get(sideBarOpenStorageAtom),
  (_get, set, newValue: boolean) => set(sideBarOpenStorageAtom, newValue)
);
