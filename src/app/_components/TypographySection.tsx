import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "./Section";

export default function TypographySection() {
  return (
    <Section title="Typography">
      <Stack spacing={0.5}>
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="body1">body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <Typography variant="body2">body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <Typography variant="caption" display="block">caption. Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="overline" display="block">overline. Lorem ipsum</Typography>
        <Typography variant="button" display="block">button. Lorem ipsum</Typography>
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Breadcrumbs>
          <Link href="#">Home</Link>
          <Link href="#">Components</Link>
          <Typography color="text.primary">Typography</Typography>
        </Breadcrumbs>
      </Box>
    </Section>
  );
}
