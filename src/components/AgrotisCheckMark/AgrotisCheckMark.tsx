import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTheme } from '@mui/material/styles';

type AgrotisCheckMarkProps<T> = {
  label: string;
  opcoes: T[];
  selecionados: T[];
  onChange: (novosSelecionados: T[]) => void;
  getLabel: (item: T) => string;
};

const AgrotisCheckMark = <T,>({
  label,
  opcoes,
  selecionados,
  onChange,
  getLabel,
}: AgrotisCheckMarkProps<T>) => {
  const theme = useTheme();
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Autocomplete
        multiple
        id="tags-agrotis"
        options={opcoes}
        value={selecionados}
        onChange={(_, novosSelecionados) => onChange(novosSelecionados)}
        getOptionLabel={getLabel}
        filterSelectedOptions
        renderValue={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={getLabel(option)}
              {...getTagProps({ index })}
              deleteIcon={<CancelIcon sx={{ color: 'white' }} />}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                '& .MuiChip-deleteIcon': {
                  color: 'white',
                },
                marginRight: '4px',
                height: '24px',
                fontSize: '0.75rem',
                padding: '4px 8px',
              }}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="standard"
            placeholder=""
          />
        )}
      />
    </Stack>
  );
};

export default AgrotisCheckMark;
