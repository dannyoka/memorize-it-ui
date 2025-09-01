import {
  FormControl,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
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
      <ToggleButtonGroup
        value={strategy}
        defaultValue="default"
        onChange={(_, newStrategy) => {
          setStrategy(newStrategy);
        }}
        exclusive
      >
        <ToggleButton value="default">Default</ToggleButton>
        <ToggleButton value="every_nth_word">Every nth word</ToggleButton>
        <ToggleButton value="first_letter_of_every_word">
          First letters only
        </ToggleButton>
      </ToggleButtonGroup>
      {strategy === "every_nth_word" && (
        <NumberInput
          value={n}
          onChange={(_, val) => {
            setN(val);
          }}
          min={1}
          max={10}
        />
      )}
    </FormControl>
  );
};
