import { DatePicker, type DatePickerProps } from '@mui/x-date-pickers';

const AgrotisDatePicker = (props: DatePickerProps<any>) => (
  <DatePicker
    sx={{ width: '100%' }}
    {...props}
    slotProps={{
      textField: {
        variant: 'standard',
      },
    }}
  />
);

export default AgrotisDatePicker;
