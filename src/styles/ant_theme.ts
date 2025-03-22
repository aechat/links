const themeConfig = {
  components: {
    Breadcrumb: {
      linkHoverColor: "var(--accent)",
      linkColor: "var(--text-color)",
      itemColor: "#707070",
      separatorColor: "var(--accent)",
    },
    Divider: {
      colorTextHeading: "var(--summary_text)",
      colorSplit: "var(--summary_border)",
      fontSizeLG: 15,
    },
    Slider: {
      dotActiveBorderColor: "var(--accent)",
      handleActiveColor: "var(--accent)",
      handleActiveOutlineColor: "var(--accent)",
      handleColor: "var(--accent)",
      dotBorderColor: "var(--accent)",
      railBg: "var(--content-background-border)",
      railHoverBg: "var(--content-background-border)",
      trackBg: "var(--links_border)",
      trackHoverBg: "var(--accent)",
    },
    Tooltip: {
      colorBgSpotlight: "var(--content-background-color)",
      colorText: "var(--text-color)",
      colorTextLightSolid: "var(--text-color)",
    },
    Modal: {
      titleColor: "var(--text-color)",
      headerBg: "transparent",
    },
  },
  token: {
    colorBgElevated: "var(--content-background-color)",
    fontFamily: "Inter, sans-serif",
    colorText: "var(--text-color)",
  },
};

export default themeConfig;
