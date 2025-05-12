import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

type AgrotisAppBarProps = {
  exibirBotaoSalvar?: boolean;
  onSalvar?: () => void;
  onClickVoltar: () => void;
  desabilitarBotaoSalvar?: boolean;
};

const AgrotisAppBar = ({
  exibirBotaoSalvar,
  onSalvar,
  desabilitarBotaoSalvar,
  onClickVoltar,
}: AgrotisAppBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClickVoltar}
          >
            <ArrowBackIosIcon sx={{ color: 'white' }} />
          </IconButton>
          <Typography variant="body1" color="white" component="div">
            Teste Front-End
          </Typography>
          {exibirBotaoSalvar && <Box sx={{ flexGrow: 1 }} />}
          {exibirBotaoSalvar && (
            <Button
              disabled={desabilitarBotaoSalvar}
              onClick={onSalvar}
              variant="contained"
              sx={(theme) => ({
                color: 'white',
                height: '36px',
                width: '85px',

                backgroundColor: theme.palette.secondary.main,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
                '&.Mui-disabled': {
                  color: 'white',
                  backgroundColor: theme.palette.secondary.light,
                  opacity: 0.5,
                },
              })}
            >
              Salvar
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AgrotisAppBar;
