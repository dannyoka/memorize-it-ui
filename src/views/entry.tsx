import { useParams } from "react-router-dom";
import { useEntry } from "../hooks/useEntry";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Strategies } from "./strategies";

export const Entry = () => {
  const [strategy, setStrategy] = useState("default");
  const params = useParams();
  const entryId = params.id;
  const { entry } = useEntry(entryId, strategy);
  if (!entry) return <div>Unable to find entry</div>;

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <h2>{entry.name}</h2>
      </Grid>
      <Grid item>
        <p>{entry.content}</p>
      </Grid>
      <Grid item>
        <Strategies strategy={strategy} setStrategy={setStrategy} />
      </Grid>
    </Grid>
  );
};
