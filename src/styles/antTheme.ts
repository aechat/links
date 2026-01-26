const themeConfig = {
  components: {
    Breadcrumb: {
      itemColor: "var(--color-text-tertiary)",
      linkColor: "var(--color-text-primary)",
      linkHoverColor: "var(--color-accent)",
      separatorColor: "var(--color-accent)",
    },
    Divider: {
      colorSplit: "var(--color-surface-primary-border)",
      colorTextHeading: "var(--color-surface-primary-text)",
      fontSizeLG: 15,
    },
    Modal: {
      headerBg: "transparent",
      titleColor: "var(--color-text-primary)",
    },
    Slider: {
      dotActiveBorderColor: "var(--color-accent)",
      dotBorderColor: "var(--color-accent)",
      handleActiveColor: "var(--color-accent)",
      handleActiveOutlineColor: "var(--color-accent)",
      handleColor: "var(--color-accent)",
      railBg: "var(--color-border-primary)",
      railHoverBg: "var(--color-border-primary)",
      trackBg: "var(--color-surface-primary-border)",
      trackHoverBg: "var(--color-accent)",
    },
    Tooltip: {
      colorBgSpotlight: "var(--color-background-secondary)",
      colorText: "var(--color-text-primary)",
      colorTextLightSolid: "var(--color-text-primary)",
    },
  },
  token: {
    colorBgElevated: "var(--color-background-secondary)",
    colorText: "var(--color-text-primary)",
    fontFamily: "Inter, sans-serif",
  },
};

export default themeConfig;
