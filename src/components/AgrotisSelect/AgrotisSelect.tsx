import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

interface AgrotisSelectProps<T> {
  values: T[];
  selectedValue: T[];
  onChange: (selectedItems: T[]) => void;
  getLabel: (item: T) => string;
  getValue: (item: T) => string;
  label: string;
}

const AgrotisSelect = <T,>({
  values,
  selectedValue,
  onChange,
  getLabel,
  getValue,
  label,
}: AgrotisSelectProps<T>): React.ReactElement => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const selectedIds = event.target.value as string[];
    const selectedItems = values.filter((item) =>
      selectedIds.includes(getValue(item))
    );
    onChange(selectedItems);
  };

  return (
    <FormControl
      variant="standard"
      sx={{ minWidth: 120, width: '100%', height: '40px' }}
    >
      <InputLabel id="agrotis-select-label">{label}</InputLabel>
      <Select
        labelId="agrotis-select-label"
        id="agrotis-select"
        value={selectedValue.map(getValue)}
        onChange={handleChange}
        label={label}
        renderValue={(selected) =>
          (selected as string[])
            .map((id) => {
              const item = values.find((v) => getValue(v) === id);
              return item ? getLabel(item) : id;
            })
            .join(', ')
        }
        sx={{
          height: '40px',
        }}
      >
        {values.map((item, index) => (
          <MenuItem key={index} value={getValue(item)}>
            {getLabel(item)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AgrotisSelect;
