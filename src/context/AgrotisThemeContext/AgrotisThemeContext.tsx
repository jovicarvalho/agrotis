import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  type PaletteMode,
} from '@mui/material';

interface AgrotisThemeContextType {
  toggleMode: () => void;
  mode: PaletteMode;
}

const AgrotisThemeContext = createContext<AgrotisThemeContextType | undefined>(
  undefined
);

export const AgrotisThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: 'rgba(0, 135, 110, 1)',
          },
          secondary: {
            main: 'rgba(0, 169, 142, 1)',
          },
          background: {
            default: mode === 'light' ? '#f5f5f5' : '#121212',
            paper: mode === 'light' ? '#fff' : '#1e1e1e',
          },
        },
      }),
    [mode]
  );

  return (
    <AgrotisThemeContext.Provider value={{ toggleMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AgrotisThemeContext.Provider>
  );
};

export const useAgrotisTheme = () => {
  const context = useContext(AgrotisThemeContext);
  if (!context)
    throw new Error(
      'useAgrotisTheme deve ser usado dentro do AgrotisThemeProvider'
    );
  return context;
};
