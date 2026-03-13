import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Section from "./Section";

const panels = ["General settings", "Advanced options", "Notifications"];

export default function AccordionSection() {
  return (
    <Section title="Accordion">
      {panels.map((label, i) => (
        <Accordion key={label} defaultExpanded={i === 0}>
          <AccordionSummary expandIcon="▾">
            <Typography>{label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Content for the &ldquo;{label}&rdquo; panel. Add form fields, descriptions, or
              any other content here.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Section>
  );
}
