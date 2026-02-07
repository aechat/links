import {theme} from "antd";

const getAntTheme = (isDarkMode: boolean, accentHue: number, saturateRatio: number) => {
  const accentLightness = isDarkMode ? 73 : 45;

  const calculatedAccentColor = `hsl(${accentHue}, ${saturateRatio * (isDarkMode ? 100 : 65)}%, ${accentLightness}%)`;

  return {
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    components: {
      Breadcrumb: {
        itemColor: "var(--color-text-tertiary)",
        linkColor: "var(--color-text-primary)",
        linkHoverColor: calculatedAccentColor,
        separatorColor: calculatedAccentColor,
      },
      Divider: {
        colorSplit: "var(--color-surface-primary-border)",
        colorTextHeading: "var(--color-surface-primary-text)",
        fontSizeLG: 15,
      },
      InputNumber: {
        colorBgContainer: "var(--color-background-tertiary)",
        colorBorder: "var(--color-border-primary)",
        colorPrimary: calculatedAccentColor,
        colorText: "var(--color-text-primary)",
        colorTextPlaceholder: "var(--color-text-tertiary)",
        controlItemBgActive: "var(--color-background-primary)",
        controlItemBgHover: "var(--color-background-secondary)",
        controlOutline: calculatedAccentColor,
        handleActiveBg: calculatedAccentColor,
        handleHoverBg: calculatedAccentColor,
      },
      Modal: {
        headerBg: "transparent",
        titleColor: "var(--color-text-primary)",
      },
      Slider: {
        dotActiveBorderColor: calculatedAccentColor,
        dotBorderColor: calculatedAccentColor,
        handleActiveColor: calculatedAccentColor,
        handleActiveOutlineColor: calculatedAccentColor,
        handleColor: calculatedAccentColor,
        railBg: "var(--color-border-primary)",
        railHoverBg: "var(--color-border-primary)",
        trackBg: "var(--color-surface-primary-border)",
        trackHoverBg: calculatedAccentColor,
      },
      Tooltip: {
        colorBgSpotlight: "var(--color-background-secondary)",
        colorText: "var(--color-text-primary)",
        colorTextLightSolid: "var(--color-text-primary)",
      },
    },
    token: {
      colorBgBase: "var(--color-background-primary)",
      colorBgElevated: "var(--color-background-secondary)",
      colorBorder: "var(--color-border-primary)",
      colorPrimary: calculatedAccentColor,
      colorText: "var(--color-text-primary)",
      fontFamily: "Inter, sans-serif",
    },
  };
};

export default getAntTheme;
