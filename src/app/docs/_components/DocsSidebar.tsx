"use client";

import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const SIDEBAR = [
  {
    section: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs/introduction" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    section: "Core Concepts",
    items: [
      { label: "Theming", href: "/docs/theming" },
      { label: "Styling", href: "/docs/styling", soon: true },
      { label: "Typography", href: "/docs/typography", soon: true },
      { label: "Color Schemes", href: "/docs/color-schemes", soon: true },
    ],
  },
  {
    section: "Components",
    items: [
      { label: "Overview", href: "/docs/components-overview", soon: true },
      { label: "Buttons", href: "/docs/buttons-guide", soon: true },
      { label: "Forms", href: "/docs/forms-guide", soon: true },
      { label: "Data Display", href: "/docs/data-display-guide", soon: true },
    ],
  },
  {
    section: "Advanced",
    items: [
      { label: "Performance", href: "/docs/performance", soon: true },
      { label: "Accessibility", href: "/docs/accessibility", soon: true },
      { label: "Server-Side Rendering", href: "/docs/ssr", soon: true },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      sx={{
        width: 240,
        flexShrink: 0,
        borderRight: "1px solid",
        borderColor: "divider",
        display: { xs: "none", md: "block" },
        position: "sticky",
        top: 64,
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        pt: 3,
        pb: 4,
      }}
    >
      {SIDEBAR.map(({ section, items }) => (
        <Box key={section} sx={{ mb: 2 }}>
          <Typography
            variant="overline"
            sx={{
              px: 2,
              fontWeight: 700,
              fontSize: "0.65rem",
              color: "text.disabled",
              letterSpacing: "1.2px",
            }}
          >
            {section}
          </Typography>
          <List dense disablePadding sx={{ mt: 0.5 }}>
            {items.map(({ label, href, soon }) => {
              const isActive = pathname === href;
              return (
                <ListItemButton
                  key={label}
                  {...(!soon && { href })}
                  disabled={soon}
                  selected={isActive}
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: 1,
                    mx: 1,
                    width: "auto",
                    "&.Mui-selected": {
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      "&:hover": { bgcolor: "primary.dark" },
                    },
                  }}
                >
                  <ListItemText
                    primary={label}
                    slotProps={{
                      primary: { variant: "body2", fontWeight: isActive ? 600 : 400 },
                    }}
                  />
                  {soon && (
                    <Chip
                      label="soon"
                      size="small"
                      sx={{ height: 16, fontSize: "0.6rem", ml: 0.5 }}
                    />
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      ))}
    </Box>
  );
}
