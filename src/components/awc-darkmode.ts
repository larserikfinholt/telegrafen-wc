import {
    LayerBaseLuminance,
    layerFillBaseLuminance,
  } from "@adaptive-web/adaptive-ui";

const setDarkMode = (isDark: boolean) => {
    console.log("darkMode change", isDark);
    // This Design Token causes `layerFillFixedBase` to update.
    // The constants are for convenience, but try changing them to another decimal value between 0 and 1.
    layerFillBaseLuminance.withDefault(
      isDark ? LayerBaseLuminance.DarkMode : LayerBaseLuminance.LightMode
    );
  };

  export default setDarkMode;