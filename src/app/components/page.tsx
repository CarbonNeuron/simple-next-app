import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import SmartButtonOutlinedIcon from "@mui/icons-material/SmartButtonOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";

const CATEGORIES = [
  {
    icon: SmartButtonOutlinedIcon,
    title: "Buttons & Actions",
    description: "Trigger operations, submit forms, and navigate between pages.",
    count: 6,
    color: "#818cf8",
  },
  {
    icon: InputOutlinedIcon,
    title: "Inputs & Forms",
    description: "Collect user data with text fields, selects, checkboxes, and more.",
    count: 9,
    color: "#34d399",
  },
  {
    icon: TableChartOutlinedIcon,
    title: "Data Display",
    description: "Present information clearly using tables, lists, chips, and avatars.",
    count: 8,
    color: "#60a5fa",
  },
  {
    icon: FeedbackOutlinedIcon,
    title: "Feedback",
    description: "Communicate state to users with alerts, dialogs, snackbars, and loaders.",
    count: 7,
    color: "#fbbf24",
  },
  {
    icon: NavigationOutlinedIcon,
    title: "Navigation",
    description: "Help users move through your app with menus, tabs, and breadcrumbs.",
    count: 6,
    color: "#f472b6",
  },
  {
    icon: ViewQuiltOutlinedIcon,
    title: "Layout",
    description: "Structure pages with containers, grids, stacks, and spacing utilities.",
    count: 5,
    color: "#a78bfa",
  },
  {
    icon: LayersOutlinedIcon,
    title: "Surfaces",
    description: "Group and elevate content using cards, accordions, and paper.",
    count: 4,
    color: "#fb923c",
  },
  {
    icon: BuildOutlinedIcon,
    title: "Utils",
    description: "Low-level utilities including portals, modals, and transitions.",
    count: 5,
    color: "#94a3b8",
  },
];

export default function ComponentsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
          Reference
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: "-0.5px", mt: 0.5 }}>
          Components
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 520 }}>
          A comprehensive set of UI building blocks. Each component is accessible,
          themeable, and ready to drop into your project.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {CATEGORIES.map(({ icon: Icon, title, description, count, color }) => (
          <Grid key={title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{
                height: "100%",
                cursor: "pointer",
                transition: "transform 0.15s, box-shadow 0.15s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${color}33`,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: `${color}18`,
                    mb: 2,
                  }}
                >
                  <Icon sx={{ color, fontSize: 22 }} />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {title}
                  </Typography>
                  <Chip label={count} size="small" sx={{ ml: 1, mt: 0.25, height: 20, fontSize: "0.7rem" }} />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
