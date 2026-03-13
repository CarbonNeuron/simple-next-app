"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Section from "./Section";

export default function FormInputsSection() {
  const [sliderValue, setSliderValue] = useState(40);
  const [rating, setRating] = useState<number | null>(3);
  const [selectValue, setSelectValue] = useState("one");
  const [checked, setChecked] = useState({ a: true, b: false });
  const [radioValue, setRadioValue] = useState("a");

  return (
    <Section title="Form Inputs">
      <Stack spacing={2}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField label="Default" variant="outlined" fullWidth />
          <TextField label="Filled" variant="filled" fullWidth />
          <TextField label="Standard" variant="standard" fullWidth />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField label="With helper text" helperText="Some helpful text" fullWidth />
          <TextField label="Error state" error helperText="This field is required" fullWidth />
          <TextField label="Disabled" disabled value="Read only" fullWidth />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField label="Multiline" multiline rows={3} fullWidth />
          <Stack spacing={2} sx={{ flex: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Select</InputLabel>
              <Select
                value={selectValue}
                label="Select"
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <MenuItem value="one">Option one</MenuItem>
                <MenuItem value="two">Option two</MenuItem>
                <MenuItem value="three">Option three</MenuItem>
              </Select>
            </FormControl>
            <Rating value={rating} onChange={(_, v) => setRating(v)} />
          </Stack>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
          <FormGroup>
            <FormLabel component="legend">Checkboxes</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={checked.a} onChange={(e) => setChecked({ ...checked, a: e.target.checked })} />}
              label="Option A"
            />
            <FormControlLabel
              control={<Checkbox checked={checked.b} onChange={(e) => setChecked({ ...checked, b: e.target.checked })} />}
              label="Option B"
            />
            <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
          </FormGroup>
          <FormControl>
            <FormLabel>Radio Group</FormLabel>
            <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
              <FormControlLabel value="a" control={<Radio />} label="Option A" />
              <FormControlLabel value="b" control={<Radio />} label="Option B" />
              <FormControlLabel value="c" control={<Radio />} label="Option C" disabled />
            </RadioGroup>
          </FormControl>
          <Stack spacing={1}>
            <FormLabel>Switches</FormLabel>
            <FormControlLabel control={<Switch defaultChecked />} label="On" />
            <FormControlLabel control={<Switch />} label="Off" />
            <FormControlLabel control={<Switch disabled />} label="Disabled" />
          </Stack>
        </Stack>
        <Box>
          <Typography gutterBottom>Slider — {sliderValue}</Typography>
          <Slider
            value={sliderValue}
            onChange={(_, v) => setSliderValue(v as number)}
            valueLabelDisplay="auto"
            marks
            step={10}
          />
        </Box>
      </Stack>
    </Section>
  );
}
