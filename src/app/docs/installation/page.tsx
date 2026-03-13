import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import CodeBlock from "../_components/CodeBlock";

const STEPS = [
  {
    title: "Create a new project",
    description: "Use the Next.js CLI to scaffold a new TypeScript project.",
    lang: "bash",
    code: `bun create next-app my-app --typescript
cd my-app`,
  },
  {
    title: "Install MUI",
    description: "Add Material UI and its peer dependencies.",
    lang: "bash",
    code: `bun add @mui/material @mui/icons-material \\
  @mui/material-nextjs @emotion/react \\
  @emotion/styled @emotion/cache`,
  },
  {
    title: "Install fonts",
    description:
      "Roboto is the default MUI typeface. next/font handles it automatically — no extra package needed.",
    lang: "tsx",
    code: `// src/theme.tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});`,
  },
  {
    title: "Start the dev server",
    description: "Run the development server with Turbopack for fast hot reload.",
    lang: "bash",
    code: `bun dev`,
  },
];

export default function InstallationPage() {
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
        Installation
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 5 }}>
        Get up and running in under two minutes. Requires Node.js 18+ or Bun 1+.
      </Typography>

      <Stepper orientation="vertical">
        {STEPS.map(({ title, description, code, lang }) => (
          <Step key={title} active>
            <StepLabel>
              <Typography variant="subtitle1" fontWeight={600}>
                {title}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {description}
              </Typography>
              <CodeBlock lang={lang}>{code}</CodeBlock>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      <Alert severity="success" sx={{ mt: 4 }}>
        Your app is now running at <strong>http://localhost:3000</strong>.
      </Alert>
    </Container>
  );
}
