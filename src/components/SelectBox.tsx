import styled from 'styled-components';


interface Props {
  options: string[];
  defaultValue: string;
  onSelect: (value: string) => void;
}

export default function SelectBox({
  options,
  defaultValue,
  onSelect,
}: Props) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = e.target.value;
      onSelect(selectedOption);
    };

  return (
    <Select onChange={handleSelect} defaultValue="defaultSelected">
      <option value="defaultSelected" disabled hidden>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  padding: 10px;
`;
