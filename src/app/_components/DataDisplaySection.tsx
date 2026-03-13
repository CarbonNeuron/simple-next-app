"use client";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Section from "./Section";

export default function DataDisplaySection() {
  return (
    <Section title="Data Display">
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Default" />
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Warning" color="warning" />
          <Chip label="Error" color="error" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Clickable" color="primary" onClick={() => {}} />
          <Chip label="Deletable" onDelete={() => {}} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <AvatarGroup max={4}>
            <Avatar>A</Avatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>B</Avatar>
            <Avatar sx={{ bgcolor: "secondary.main" }}>C</Avatar>
            <Avatar sx={{ bgcolor: "success.main" }}>D</Avatar>
            <Avatar sx={{ bgcolor: "error.main" }}>E</Avatar>
          </AvatarGroup>
          <Badge badgeContent={4} color="primary">
            <Button variant="outlined" size="small">Messages</Button>
          </Badge>
          <Badge badgeContent={99} color="error" max={99}>
            <Button variant="outlined" size="small">Notifications</Button>
          </Badge>
          <Badge variant="dot" color="success">
            <Button variant="outlined" size="small">Online</Button>
          </Badge>
        </Stack>
      </Stack>
    </Section>
  );
}
