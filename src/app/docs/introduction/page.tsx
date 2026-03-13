import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function IntroductionPage() {
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
        Introduction
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
        My App is a modern React application framework built on top of Next.js and Material UI.
        It provides a solid foundation for building production-ready web applications with
        beautiful, accessible components out of the box.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
        The framework takes an opinionated approach to common problems — theming, routing,
        observability, and deployment — so you can focus on building your product instead
        of configuring your stack.
      </Typography>

      <Alert severity="info" sx={{ my: 3 }}>
        This is pre-release software. APIs may change between minor versions.
      </Alert>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Key Features
      </Typography>

      {[
        [
          "Zero-flash dark mode",
          "CSS variable theming with class-based color schemes eliminates the flash of wrong theme on load.",
        ],
        [
          "Observability built-in",
          "OpenTelemetry traces and metrics ship to Grafana out of the box — no extra setup needed.",
        ],
        [
          "App Router ready",
          "Built on Next.js App Router with full streaming, server components, and layouts support.",
        ],
        [
          "Type-safe throughout",
          "TypeScript-first with strict mode enabled and full type coverage across all APIs.",
        ],
      ].map(([title, desc]) => (
        <Box
          key={title}
          sx={{ mb: 2.5, pl: 2, borderLeft: "2px solid", borderColor: "primary.main" }}
        >
          <Typography variant="subtitle2" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.7 }}>
            {desc}
          </Typography>
        </Box>
      ))}

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 5 }}>
        What&apos;s next?
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
        Head to <strong>Installation</strong> to scaffold your project, then follow{" "}
        <strong>Quick Start</strong> to build your first page.
      </Typography>
    </Container>
  );
}
