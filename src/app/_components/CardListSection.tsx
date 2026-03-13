import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "./Section";

const listItems = [
  { label: "Inbox", count: "12 messages", badge: "4", color: "primary" as const },
  { label: "Drafts", count: "4 messages", badge: "2", color: "default" as const },
  { label: "Sent", count: "8 messages", badge: "", color: "default" as const },
  { label: "Trash", count: "1 message", badge: "", color: "default" as const },
];

export default function CardListSection() {
  return (
    <Section title="Card & List">
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: "primary.main" }}>R</Avatar>}
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together
              with your guests.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Paper variant="outlined" sx={{ flex: 1 }}>
          <List disablePadding>
            {listItems.map(({ label, count, badge, color }, i) => (
              <ListItem key={label} divider={i < listItems.length - 1}>
                <ListItemText primary={label} secondary={count} />
                <Chip
                  size="small"
                  label={badge}
                  color={color}
                  sx={{ visibility: badge ? "visible" : "hidden" }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Stack>
    </Section>
  );
}
