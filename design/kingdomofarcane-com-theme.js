// React Theme — extracted from https://kingdomofarcane.com
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '12': string;
    '14': string;
    '16': string;
    '20': string;
    '28': string;
    '14.4': string;
    '11.2': string;
 *   };
 *   space: {
    '4': string;
    '112': string;
 *   };
 *   radii: {
    md: string;
    lg: string;
 *   };
 *   shadows: {
    sm: string;
    md: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#00d9ff",
    "secondary": "#ffb800",
    "accent": "#00b1ff",
    "background": "#0a0a0f",
    "foreground": "#000000",
    "neutral50": "#e8e8f0",
    "neutral100": "#000000",
    "neutral200": "#9ca3af",
    "neutral300": "#0a0a0f",
    "neutral400": "#ffffff",
    "neutral500": "#c8c8d8",
    "neutral600": "#4b5563"
  },
  "fonts": {
    "body": "'Cinzel', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "20": "20px",
    "28": "28px",
    "14.4": "14.4px",
    "11.2": "11.2px"
  },
  "space": {
    "4": "4px",
    "112": "112px"
  },
  "radii": {
    "md": "6px",
    "lg": "16px"
  },
  "shadows": {
    "sm": "rgb(0, 217, 255) 0px 0px 7.8234px 0px",
    "md": "rgb(74, 144, 226) 0px 0px 8.9496px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#00d9ff",
      "light": "hsl(189, 100%, 65%)",
      "dark": "hsl(189, 100%, 35%)"
    },
    "secondary": {
      "main": "#ffb800",
      "light": "hsl(43, 100%, 65%)",
      "dark": "hsl(43, 100%, 35%)"
    },
    "background": {
      "default": "#0a0a0f",
      "paper": "#0d0d18"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#e8e8f0"
    }
  },
  "typography": {
    "fontFamily": "'Inter', sans-serif",
    "h2": {
      "fontSize": "28px",
      "fontWeight": "600",
      "lineHeight": "39.2px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "700",
      "lineHeight": "28px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body2": {
      "fontSize": "12px",
      "fontWeight": "400",
      "lineHeight": "16px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(255, 184, 0, 0.8) 0px 0px 0px 2px, rgba(0, 0, 0, 0.8) 0px 0px 0px 3px, rgba(255, 255, 255, 0.25) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.5) 0px -2px 4px 0px inset, rgba(0, 217, 255, 0.4) 0px 0px 20px 0px, rgba(0, 0, 0, 0.8) 0px 8px 16px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 217, 255, 0.15) 0px 0px 12px 0px",
    "rgba(139, 92, 46, 0.6) 0px 0px 0px 2px, rgba(0, 0, 0, 0.8) 0px 0px 0px 3px, rgba(255, 255, 255, 0.15) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.4) 0px -2px 4px 0px inset, rgba(0, 0, 0, 0.6) 0px 6px 12px 0px",
    "rgb(0, 180, 216) 0px 0px 4px 0px",
    "rgb(0, 217, 255) 0px 0px 4px 0px"
  ]
};

export default theme;
