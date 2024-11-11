import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { NumberInput } from "../components/number-input";

export const Strategies = ({
  strategy,
  setStrategy,
  n,
  setN,
}: {
  strategy: string;
  setStrategy: (val: string) => void;
  n: number | null;
  setN: (val: number | null) => void;
}) => {
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
          label="Every nth word"
          value="every_nth_word"
          control={<Radio />}
        />
        <FormControlLabel
          label="First letters only"
          value="first_letter_of_every_word"
          control={<Radio />}
        />
      </RadioGroup>
      <NumberInput
        value={n}
        onChange={(_, val) => {
          setN(val);
        }}
        min={1}
        max={10}
      />
    </FormControl>
  );
};
