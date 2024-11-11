import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Unstable_NumberInput as NumberInput } from "@mui/base";
import { useState } from "react";

export const Strategies = ({
  strategy,
  setStrategy,
}: {
  strategy: string;
  setStrategy: (val: string) => void;
}) => {
  const [n, setN] = useState(1);

  return (
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
        <FormControlLabel label="Default" value="default" control={<Radio />} />
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
      <FormControlLabel
        onChange={(e) => setN(e.target.value)}
        label="n"
        value="n"
        control={<NumberInput />}
      />
    </FormControl>
  );
};
