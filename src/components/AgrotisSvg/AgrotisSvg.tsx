import React from 'react';
import { Box } from '@mui/material';
import AgrotisExtenso from '../../assets/AgrotisExtenso.svg';
import AgrotisLogo from '../../assets/AgrotisLogo.svg';

type IconeNome = 'AgrotisExtenso' | 'AgrotisLogo';

interface IconeProps {
  nome: IconeNome; 
  alt?: string;
  width?: number | string;
  height?: number | string;
  sx?: object;
}

const AgrotisSvg: React.FC<IconeProps> = ({
  nome,
  alt = '',
  width = 24,
  height = 24,
  sx = {},
}) => {
  const icones: { [key in IconeNome]: string } = {
    AgrotisExtenso,
    AgrotisLogo,
  };

  const src = icones[nome];

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width,
        height,
        display: 'inline-block',
        ...sx,
      }}
    />
  );
};

export default AgrotisSvg;