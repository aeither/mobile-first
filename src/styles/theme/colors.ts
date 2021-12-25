import { DeepPartial, Theme } from "@chakra-ui/react";
import { colors as uiColors } from "larissa-ui";

/** extend additional color here */
const myColors: DeepPartial<
  Record<string, Theme["colors"]["current" | "purple"]>
> = {
  // Basic
  neutralDarkest: "#141a1e",
  neutralDarker: "#1a2227",
  neutralDark: "#202a30",
  neutralLightest: "#fff",
  neutralLighter: "#f0f0f0",
  neutralLight: "#d4d4d4",

  neutralDarkerAlpha: "#1a2227b3",
  neutralLighterAlpha: "#f0f0f0b3",

  borderDark: "#30363d",
  borderLight: "#c7d2da",

  // Functional
  success: "#9AF1A8",
  error: "#F86D97",

  // Main
  // primary: {
  //   "50": "#E6FBFF",
  //   "100": "#B9F3FE",
  //   "200": "#8CEBFD",
  //   "300": "#5FE3FC",
  //   "400": "#32DCFB",
  //   "500": "#05D4FA",
  //   "600": "#04AAC8",
  //   "700": "#037F96",
  //   "800": "#025564",
  //   "900": "#012A32",
  // },
  // accentDark: {
  //   "50": "#E8FCF0",
  //   "100": "#BFF8D6",
  //   "200": "#95F3BB",
  //   "300": "#6CEFA1",
  //   "400": "#43EA86",
  //   "500": "#19E66B",
  //   "600": "#14B856",
  //   "700": "#0F8A40",
  //   "800": "#0A5C2B",
  //   "900": "#052E15",
  // },
  // accentLight: {
  //   "50": "#FAEAF2",
  //   "100": "#F2C5DC",
  //   "200": "#E99FC5",
  //   "300": "#E17AAE",
  //   "400": "#D85497",
  //   "500": "#D02F81",
  //   "600": "#A62667",
  //   "700": "#7D1C4D",
  //   "800": "#531333",
  //   "900": "#2A091A",
  // },
};

export const colors = {
  ...uiColors,
  ...myColors,
};
