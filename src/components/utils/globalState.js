import { atom } from "recoil";

export const darkModeState = atom({
  key: "darkModeState",
  default: false,
});
export const serviceDatas = atom({
  key: "serviceDatas",
  default: [],
});
export const count = atom({
  key: "count",
  default: 0,
});
