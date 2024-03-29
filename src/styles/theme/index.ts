import { extendTheme } from "@chakra-ui/react";
import { customTheme } from "larissa-ui";

import { colors } from "./colors";
import components from "./components";
import { borderRadius } from "./default-values";
import fonts from "./fonts";
import layerStyles from "./layer-styles";
import styles from "./styles";

const myTheme = {
  // components: {
  //   ...components,
  //   Text: {
  //     baseStyle: {
  //       textTransform: "none",
  //     },
  //   },
  //   Button: {
  //     baseStyle: {
  //       fontWeight: "bold", // Normally, it is "semibold"
  //       borderRadius,
  //       textTransform: "none",
  //     },
  //   },
  // },
  // colors,
  // fonts,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  layerStyles,
  styles,
};

const theme = extendTheme(customTheme, myTheme);

export default theme;
