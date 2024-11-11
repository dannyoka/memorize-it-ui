import { Grid, Table, TableCell, TableHead, TableRow } from "@mui/material";
import { useEntries } from "../hooks/useEntries";
import { Link } from "react-router-dom";

const EntryRow = ({ name, entryId }: { name: string; entryId: string }) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Link to={`/entry/${entryId}`}>Practice</Link>
      </TableCell>
    </TableRow>
  );
};

export const Entries = () => {
  const { entries } = useEntries();
  return (
    <Grid container flexDirection="row" justifyContent="center">
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        style={{ width: "100%" }}
      >
        <h1>Entries</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
            {entries.map((entry) => (
              <EntryRow entryId={entry.id} key={entry.id} name={entry.name} />
            ))}
          </TableHead>
        </Table>
      </Grid>
    </Grid>
  );
};
