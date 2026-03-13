"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Section from "./Section";

const steps = ["Select campaign", "Create ad group", "Create ad"];

export default function NavigationSection() {
  const [tab, setTab] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Section title="Navigation & Stepper">
      <Stack spacing={3}>
        <Paper variant="outlined">
          <Tabs value={tab} onChange={(_, v) => setTab(v)}>
            <Tab label="Tab One" />
            <Tab label="Tab Two" />
            <Tab label="Tab Three" />
            <Tab label="Disabled" disabled />
          </Tabs>
          <Box sx={{ p: 2 }}>
            <Typography>Content for tab {tab + 1}.</Typography>
          </Box>
        </Paper>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stack direction="row" spacing={1}>
          <Button disabled={activeStep === 0} onClick={() => setActiveStep((s) => s - 1)}>
            Back
          </Button>
          <Button
            variant="contained"
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((s) => s + 1)}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
}
