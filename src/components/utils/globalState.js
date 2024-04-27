import { atom } from "recoil";

// export const darkModeState = atom({
//   key: "darkModeState",
//   default: false,
// });
export const serviceData = atom({
  key: "serviceData",
  default: [],
});
export const count = atom({
  key: "count",
  default: 0,
});
export const modalOpen = atom({
  key: "modalOpen ",
  default: false,
});
export const selectedService = atom({
  key: "selectedService ",
  default: [],
});
export const projectTypes = atom({
  key: "projectTypes",
  default: [],
});
export const projectDescriptions = atom({
  key: "projectDescriptions",
  default: "",
});
export const estimatedBudgets = atom({
  key: "estimatedBudgets",
  default: "",
});
export const referenceWebsites = atom({
  key: "referenceWebsites",
  default: "",
});
export const socialService = atom({
  key: "socialService",
  default: [],
});
export const websiteTypeState = atom({
  key: "websiteTypeState",
  default: [],
});
export const training = atom({
  key: "training",
  default: [],
});
export const getCourseInput = atom({
  key: "getCourseInput",
  default: [],
});
