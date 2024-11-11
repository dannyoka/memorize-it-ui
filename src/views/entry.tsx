import { useParams } from "react-router-dom";
import { useEntry } from "../hooks/useEntry";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

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
        <FormControl>
          <FormLabel>Strategy</FormLabel>
          <RadioGroup
            row
            value={strategy}
            defaultValue="default"
            onChange={(e) => {
              setStrategy(e.target.value);
            }}
          >
            <FormControlLabel
              label="Default"
              value="default"
              control={<Radio />}
            />
            <FormControlLabel
              label="Every other word"
              value="every_nth_word"
              control={<Radio />}
            />
            <FormControlLabel
              label="First letters only"
              value="first_letter_of_every_word"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};
