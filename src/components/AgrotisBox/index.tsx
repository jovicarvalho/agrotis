import { Box, type BoxProps } from '@mui/material';

const AgrotisBox = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      boxShadow: 3,
      ...sx,
    }}
    {...props}
  />
);

export default AgrotisBox;
