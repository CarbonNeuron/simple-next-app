import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AccordionSection from "./_components/AccordionSection";
import CardListSection from "./_components/CardListSection";
import TableSection from "./_components/TableSection";
import TypographySection from "./_components/TypographySection";
import ButtonsSection from "./_components/ButtonsSection";
import DataDisplaySection from "./_components/DataDisplaySection";
import FeedbackSection from "./_components/FeedbackSection";
import FormInputsSection from "./_components/FormInputsSection";
import NavigationSection from "./_components/NavigationSection";

export default function Page() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4">MUI Component Showcase</Typography>
          <Typography variant="body2" color="text.secondary">
            Vanilla Material UI — default theme, all core components.
          </Typography>
        </Box>

        <TypographySection />
        <ButtonsSection />
        <FormInputsSection />
        <DataDisplaySection />
        <FeedbackSection />
        <NavigationSection />
        <TableSection />
        <CardListSection />
        <AccordionSection />
      </Stack>
    </Container>
  );
}
