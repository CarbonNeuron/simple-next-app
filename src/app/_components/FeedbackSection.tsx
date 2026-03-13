"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "./Section";

export default function FeedbackSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <>
      <Section title="Feedback">
        <Stack spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — check it out!
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
          </Alert>
          <Stack spacing={1}>
            <Typography variant="body2">Linear Progress</Typography>
            <LinearProgress />
            <LinearProgress variant="determinate" value={40} />
            <LinearProgress color="secondary" />
            <LinearProgress color="success" variant="determinate" value={70} />
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography variant="body2">Circular Progress</Typography>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress variant="determinate" value={60} />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
            <Button variant="outlined" onClick={() => setSnackbarOpen(true)}>
              Show Snackbar
            </Button>
          </Stack>
        </Stack>
      </Section>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Use Google&apos;s location service?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data
            to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Disagree</Button>
          <Button onClick={() => setDialogOpen(false)} variant="contained" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="This is a snackbar message"
        action={
          <Button color="inherit" size="small" onClick={() => setSnackbarOpen(false)}>
            Dismiss
          </Button>
        }
      />
    </>
  );
}
