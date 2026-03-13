"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MenuIcon from "@mui/icons-material/Menu";

const NAV_LINKS = [
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="sticky" component="nav">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ mr: 1, display: { sm: "none" }, color: "text.primary" }}
            onClick={() => setDrawerOpen(true)}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>

          <AutoAwesomeIcon sx={{ mr: 1, color: "primary.main", fontSize: 20 }} />
          <Typography
            variant="h6"
            component="span"
            sx={{ fontWeight: 700, letterSpacing: "-0.4px", color: "text.primary" }}
          >
            My App
          </Typography>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ ml: 4, display: { xs: "none", sm: "flex" } }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Button
                key={label}
                href={href}
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  "&:hover": { color: "text.primary", bgcolor: "transparent" },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Button variant="contained" size="small" sx={{ display: { xs: "none", sm: "flex" } }}>
            Get started
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { sm: "none" } }}
      >
        <Box sx={{ width: 240 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <Toolbar>
            <AutoAwesomeIcon sx={{ mr: 1, color: "primary.main", fontSize: 20 }} />
            <Typography variant="subtitle2" fontWeight={700}>
              My App
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {NAV_LINKS.map(({ label, href }) => (
              <ListItemButton key={label} component="a" href={href}>
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          borderTop: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="caption" color="text.disabled">
          © {new Date().getFullYear()} My App. Built with Next.js + MUI.
        </Typography>
      </Box>
    </Box>
  );
}
