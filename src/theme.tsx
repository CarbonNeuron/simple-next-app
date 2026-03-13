"use client";

import { forwardRef } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Adapter so MUI Link/ButtonBase use Next.js client-side navigation
const LinkBehavior = forwardRef<HTMLAnchorElement, NextLinkProps>(
  function LinkBehavior(props, ref) {
    return <NextLink ref={ref} {...props} />;
  },
);

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: ":root",
  },
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: "#0c0d13",
          paper: "#14151f",
        },
        primary: {
          main: "#818cf8",
          light: "#a5aaff",
          dark: "#5c63d8",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#34d399",
          light: "#6ee7b7",
          dark: "#10b981",
          contrastText: "#000000",
        },
        error: { main: "#f87171" },
        warning: { main: "#fbbf24" },
        info: { main: "#60a5fa" },
        success: { main: "#34d399" },
        divider: "rgba(255,255,255,0.07)",
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
          disabled: "rgba(255,255,255,0.28)",
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: { fontWeight: 300, letterSpacing: "-0.5px" },
    h2: { fontWeight: 300, letterSpacing: "-0.25px" },
    h3: { fontWeight: 400 },
    h4: { fontWeight: 400, letterSpacing: "0.25px" },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 500 },
    subtitle1: { letterSpacing: "0.15px" },
    subtitle2: { fontWeight: 500, letterSpacing: "0.1px" },
    button: { textTransform: "none", fontWeight: 500, letterSpacing: "0.4px" },
    overline: { letterSpacing: "1.5px" },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiLink: {
      defaultProps: { component: LinkBehavior },
    },
    MuiButtonBase: {
      defaultProps: { LinkComponent: LinkBehavior },
    },
    // Suppress the default gradient that MUI adds on dark Paper/Card
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "var(--mui-palette-background-default)",
          borderBottom: "1px solid var(--mui-palette-divider)",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          boxShadow: "0 0 16px rgba(129,140,248,0.3)",
          "&:hover": {
            boxShadow: "0 0 24px rgba(129,140,248,0.45)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6 },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { borderRadius: 6, fontSize: "0.75rem" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.12)",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontWeight: 600,
            letterSpacing: "0.05em",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            color: "var(--mui-palette-text-secondary)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgba(255,255,255,0.07)" },
      },
    },
  },
});

export default theme;
