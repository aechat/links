import {useEffect} from "react";

const useDynamicFavicon = (svgContent: string) => {
  useEffect(() => {
    if (!svgContent) {
      return;
    }

    const getAccentColor = () => {
      const accentHue = getComputedStyle(document.documentElement).getPropertyValue(
        "--accent-hue"
      );

      return `hsl(${accentHue}, 100%, 70%)`;
    };

    const updateFavicon = () => {
      try {
        const color = getAccentColor();

        const themedSvg = svgContent.replaceAll(/fill=".*?"/g, `fill="${color}"`);

        const svgBlob = new Blob([themedSvg], {type: "image/svg+xml"});

        const url = URL.createObjectURL(svgBlob);

        let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");

        if (link) {
          link.href = url;
        } else {
          link = document.createElement("link");
          link.rel = "icon";
          link.href = url;
          document.querySelectorAll("head")[0].append(link);
        }
      } catch (error) {
        console.error("Failed to update favicon:", error);
      }
    };

    updateFavicon();

    const handleAccentHueChange = () => {
      updateFavicon();
    };

    globalThis.addEventListener("accentHueChanged", handleAccentHueChange);

    return () => {
      globalThis.removeEventListener("accentHueChanged", handleAccentHueChange);
    };
  }, [svgContent]);
};

export default useDynamicFavicon;
