const themeConfig = {
  components: {
    Breadcrumb: {
      linkHoverColor: "var(--color-accent)",
      linkColor: "var(--color-text-primary)",
      itemColor: "var(--color-text-tertiary)",
      separatorColor: "var(--color-accent)",
    },
    Divider: {
      colorTextHeading: "var(--color-surface-primary-text)",
      colorSplit: "var(--color-surface-primary-border)",
      fontSizeLG: 15,
    },
    Slider: {
      dotActiveBorderColor: "var(--color-accent)",
      handleActiveColor: "var(--color-accent)",
      handleActiveOutlineColor: "var(--color-accent)",
      handleColor: "var(--color-accent)",
      dotBorderColor: "var(--color-accent)",
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
    Modal: {
      titleColor: "var(--color-text-primary)",
      headerBg: "transparent",
    },
  },
  token: {
    colorBgElevated: "var(--color-background-secondary)",
    fontFamily: "Inter, sans-serif",
    colorText: "var(--color-text-primary)",
  },
};

export default themeConfig;
