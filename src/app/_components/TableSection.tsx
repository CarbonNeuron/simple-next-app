import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Section from "./Section";

const rows = [
  { name: "Button", category: "Input", status: "Stable" },
  { name: "TextField", category: "Input", status: "Stable" },
  { name: "Dialog", category: "Feedback", status: "Stable" },
  { name: "Snackbar", category: "Feedback", status: "Stable" },
  { name: "Tooltip", category: "Data Display", status: "Stable" },
];

export default function TableSection() {
  return (
    <Section title="Table">
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Component</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  <Chip label={row.status} color="success" size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}
