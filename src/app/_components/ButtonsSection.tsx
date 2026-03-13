"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import Section from "./Section";

export default function ButtonsSection() {
  const [alignment, setAlignment] = useState("left");
  return (
    <Section title="Buttons">
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" disabled>Disabled</Button>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="error">Error</Button>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <ButtonGroup variant="contained">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
          </ButtonGroup>
          <Fab color="primary" size="small">+</Fab>
          <Fab color="secondary" size="medium">+</Fab>
        </Stack>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={(_, v) => { if (v) setAlignment(v); }}
          >
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
          <Tooltip title="This is a tooltip" arrow>
            <Button variant="outlined">Hover me</Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Section>
  );
}
