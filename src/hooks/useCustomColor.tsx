import { useColorModeValue } from "@chakra-ui/react";
import { colors } from "../styles/theme/colors";

function useCustomColor() {
  const primaryColor = useColorModeValue(
    colors.primary[500],
    colors.primary[200]
  );
  const getOverBgColor = useColorModeValue(
    colors.neutralLighter,
    colors.neutralDarker
  );
  const accentColor = useColorModeValue(
    colors.accentLight[500],
    colors.accentDark[500]
  );
  const coloredText = useColorModeValue(
    colors.neutralDark,
    colors.neutralLight
  );
  const accentColorScheme = useColorModeValue("accentLight", "accentDark");

  const getTextColor = useColorModeValue(
    colors.neutralDarkest,
    colors.neutralLightest
  );
  const getBgColor = useColorModeValue(
    colors.neutralLightest,
    colors.neutralDarkest
  );
  const getNeutralAlphaColor = useColorModeValue(
    colors.neutralLighterAlpha,
    colors.neutralDarkerAlpha
  );
  return {
    primaryColor,
    getOverBgColor,
    accentColor,
    coloredText,
    accentColorScheme,
    getTextColor,
    getBgColor,
    getNeutralAlphaColor,
  };
}

export default useCustomColor;
