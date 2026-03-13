import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CodeBlock from "../_components/CodeBlock";

export default function ThemingPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6, px: { xs: 3, md: 6 } }}>
      <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
        Core Concepts
      </Typography>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ letterSpacing: "-0.4px", mt: 0.5 }}
      >
        Theming
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
        My App uses MUI&apos;s CSS variable theming system. All design tokens are emitted as
        CSS custom properties — so color scheme switching is instant and flicker-free, even
        with server rendering.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Enabling CSS variables
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.7 }}>
        Pass <code>cssVariables</code> to <code>createTheme</code>. The{" "}
        <code>colorSchemeSelector</code> tells MUI which CSS selector to scope each scheme
        under.
      </Typography>
      <CodeBlock>{`const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: ":root",
  },
  colorSchemes: {
    light: true,
    dark: {
      palette: {
        primary: { main: "#818cf8" },
        background: {
          default: "#0c0d13",
          paper: "#14151f",
        },
      },
    },
  },
});`}</CodeBlock>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Customizing the palette
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.7 }}>
        Override any palette token per color scheme. MUI generates CSS variables for every
        token, available as <code>var(--mui-palette-*)</code> anywhere in your CSS.
      </Typography>
      <CodeBlock>{`colorSchemes: {
  dark: {
    palette: {
      primary:   { main: "#818cf8", light: "#a5aaff", dark: "#5c63d8" },
      secondary: { main: "#34d399" },
      error:     { main: "#f87171" },
      warning:   { main: "#fbbf24" },
      info:      { main: "#60a5fa" },
      success:   { main: "#34d399" },
      divider:   "rgba(255,255,255,0.07)",
      text: {
        primary:   "#e2e8f0",
        secondary: "#94a3b8",
      },
    },
  },
},`}</CodeBlock>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Component overrides
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.7 }}>
        Customise every instance of a component globally via <code>components</code>. Use{" "}
        <code>styleOverrides</code> for CSS and <code>defaultProps</code> for prop defaults.
      </Typography>
      <CodeBlock>{`components: {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: { borderRadius: 8, textTransform: "none" },
      containedPrimary: {
        boxShadow: "0 0 16px rgba(129,140,248,0.3)",
        "&:hover": { boxShadow: "0 0 24px rgba(129,140,248,0.45)" },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        border: "1px solid rgba(255,255,255,0.06)",
      },
    },
  },
},`}</CodeBlock>

      <Box sx={{ mt: 4 }}>
        {[
          ["Shape", "Set shape.borderRadius to change the global border-radius scale used by MuiButton, MuiCard, MuiChip, and others."],
          ["Typography", "Override the fontFamily, fontWeight, and letterSpacing of each variant (h1–h6, body1, body2, etc.) under the typography key."],
          ["Spacing", "The default spacing unit is 8px. Pass spacing: 4 to createTheme to use a 4px base instead."],
        ].map(([title, desc]) => (
          <Box
            key={title}
            sx={{ mb: 2.5, pl: 2, borderLeft: "2px solid", borderColor: "divider" }}
          >
            <Typography variant="subtitle2" fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.7 }}>
              {desc}
            </Typography>
          </Box>
        ))}
      </Box>

      <Alert severity="info" sx={{ mt: 4 }}>
        See the MUI docs for the full theme shape reference.
      </Alert>
    </Container>
  );
}
