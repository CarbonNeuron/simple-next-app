import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CodeBlock from "../_components/CodeBlock";

export default function QuickStartPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6, px: { xs: 3, md: 6 } }}>
      <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
        Getting Started
      </Typography>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ letterSpacing: "-0.4px", mt: 0.5 }}
      >
        Quick Start
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
        Build your first page with MUI components in a few lines of code.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        1. Set up providers
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.7 }}>
        Wrap your root layout with <code>AppRouterCacheProvider</code> and{" "}
        <code>ThemeProvider</code>. This enables CSS-in-JS with Next.js App Router and
        injects your theme globally.
      </Typography>
      <CodeBlock>{`// src/app/layout.tsx
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}`}</CodeBlock>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        2. Build your first page
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.7 }}>
        MUI components work in both server and client components. Add{" "}
        <code>&quot;use client&quot;</code> only when you need interactivity.
      </Typography>
      <CodeBlock>{`// src/app/page.tsx
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Page() {
  return (
    <Container maxWidth="sm" sx={{ py: 12, textAlign: "center" }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h3" fontWeight={700}>
          Hello, world!
        </Typography>
        <Typography color="text.secondary">
          You&apos;re up and running with Next.js + MUI.
        </Typography>
        <Button variant="contained" size="large">
          Get started
        </Button>
      </Stack>
    </Container>
  );
}`}</CodeBlock>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        3. Use the theme
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.7 }}>
        Access theme tokens via the <code>sx</code> prop on any MUI component. No imports
        needed — values resolve to CSS variables at runtime.
      </Typography>
      <CodeBlock>{`<Box
  sx={{
    p: 3,
    bgcolor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    borderRadius: 2,
    color: "text.primary",
  }}
>
  Themed box
</Box>`}</CodeBlock>

      <Alert severity="info" sx={{ mt: 4 }}>
        Next step: read <strong>Theming</strong> to learn how to customize the palette,
        typography, and component defaults.
      </Alert>
    </Container>
  );
}
