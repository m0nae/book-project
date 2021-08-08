import { Label } from "./index.styles";

interface OptionProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  optionName: string;
  optionNameLabel: string;
  radioName: string;
}

export default function Option({
  selectedOption,
  setSelectedOption,
  optionName,
  optionNameLabel,
  radioName,
}: OptionProps) {
  return (
    <>
      <Label
        selectedOption={selectedOption}
        optionName={optionName}
        htmlFor={optionName}
      >
        {optionNameLabel}
        <input
          type="radio"
          name={radioName}
          id={optionName}
          value={optionName}
          checked={selectedOption === optionName}
          onChange={() => setSelectedOption(optionName)}
        />
      </Label>
    </>
  );
}
