import { atom } from "recoil";

export const darkModeState = atom({
  key: "darkModeState",
  default: false,
});
export const serviceData = atom({
  key: "serviceData",
  default: [],
});
export const count = atom({
  key: "count",
  default: 0,
});
