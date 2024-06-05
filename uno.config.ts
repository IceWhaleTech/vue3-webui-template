import presetZex from "@icewhale/preset-zex";
import { colors } from "@icewhale/preset-zex/colors";
import { presetIcons, presetTypography, defineConfig, transformerDirectives } from "unocss";

const hexToRgb = (hex: string, alpha?: number) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return alpha ? `${r} ${g} ${b} / ${alpha}` : `${r} ${g} ${b}`;
};

export default defineConfig({
  preflights: [
    {
      getCSS: () => `
      :root {
        --primary-50: ${hexToRgb(colors.blue[50])};
        --primary-100: ${hexToRgb(colors.blue[100])};
        --primary-200: ${hexToRgb(colors.blue[200])};
        --primary-300: ${hexToRgb(colors.blue[300])};
        --primary-400: ${hexToRgb(colors.blue[400])};
        --primary-500: ${hexToRgb(colors.blue[500])};
        --primary-600: ${hexToRgb(colors.blue[600])};
        --primary-700: ${hexToRgb(colors.blue[700])};
        --primary-800: ${hexToRgb(colors.blue[800])};
        --primary-900: ${hexToRgb(colors.blue[900])};
        --primary-950: ${hexToRgb(colors.blue[950])};
        --surface-0: ${hexToRgb("#ffffff")};
        --surface-50: ${hexToRgb(colors.slate[50])};
        --surface-100: ${hexToRgb(colors.slate[100])};
        --surface-200: ${hexToRgb(colors.slate[200])};
        --surface-300: ${hexToRgb(colors.slate[300])};
        --surface-400: ${hexToRgb(colors.slate[400])};
        --surface-500: ${hexToRgb(colors.slate[500])};
        --surface-600: ${hexToRgb(colors.slate[600])};
        --surface-700: ${hexToRgb(colors.slate[700])};
        --surface-800: ${hexToRgb(colors.slate[800])};
        --surface-900: ${hexToRgb(colors.slate[900])};
        --surface-950: ${hexToRgb(colors.slate[950])};
      }
      :root {
        --primary: var(--primary-500);
        --primary-inverse: var(--surface-0);
        --primary-hover: var(--primary-600);
        --primary-active-color: var(--primary-600);
      
        --primary-highlight-opacity: 0.1;
        --primary-highlight-inverse: var(--primary-700);
        --primary-highlight-hover-opacity: 0.2;
      }
      .dark {
        --primary: var(--primary-400);
        --primary-inverse: var(--surface-900);
        --primary-hover: var(--primary-300);
        --primary-active-color: var(--primary-300);
      
        --primary-highlight-opacity: 0.2;
        --primary-highlight-inverse: var(--surface-0);
        --primary-highlight-hover-opacity: 0.3;
      }
    `,
    },
  ],
  theme: {
    colors: {
      primary: "rgb(var(--primary))",
      "primary-inverse": "rgb(var(--primary-inverse))",
      "primary-hover": "rgb(var(--primary-hover))",
      "primary-active-color": "rgb(var(--primary-active-color))",

      "primary-highlight": "rgb(var(--primary)/var(--primary-highlight-opacity))",
      "primary-highlight-inverse": "rgb(var(--primary-highlight-inverse))",
      "primary-highlight-hover": "rgb(var(--primary)/var(--primary-highlight-hover-opacity))",

      "primary-50": "rgb(var(--primary-50))",
      "primary-100": "rgb(var(--primary-100))",
      "primary-200": "rgb(var(--primary-200))",
      "primary-300": "rgb(var(--primary-300))",
      "primary-400": "rgb(var(--primary-400))",
      "primary-500": "rgb(var(--primary-500))",
      "primary-600": "rgb(var(--primary-600))",
      "primary-700": "rgb(var(--primary-700))",
      "primary-800": "rgb(var(--primary-800))",
      "primary-900": "rgb(var(--primary-900))",
      "primary-950": "rgb(var(--primary-950))",

      "surface-0": "rgb(var(--surface-0))",
      "surface-50": "rgb(var(--surface-50))",
      "surface-100": "rgb(var(--surface-100))",
      "surface-200": "rgb(var(--surface-200))",
      "surface-300": "rgb(var(--surface-300))",
      "surface-400": "rgb(var(--surface-400))",
      "surface-500": "rgb(var(--surface-500))",
      "surface-600": "rgb(var(--surface-600))",
      "surface-700": "rgb(var(--surface-700))",
      "surface-800": "rgb(var(--surface-800))",
      "surface-900": "rgb(var(--surface-900))",
      "surface-950": "rgb(var(--surface-950))",
    },
  },
  presets: [presetZex({}), presetIcons({ autoInstall: true }), presetTypography()],
  transformers: [transformerDirectives()],
  content: {
    pipeline: {
      include: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
      ],
    },
  },
});
