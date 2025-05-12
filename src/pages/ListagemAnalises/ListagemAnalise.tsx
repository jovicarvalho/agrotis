import { useAgendamentoAnalise } from '../../context/AgendamentoAnaliseContext/AgendamentoAnaliseContext';
import { Button, Divider, Typography } from '@mui/material';
import AgrotisBox from '../../components/AgrotisBox';
import AgrotisAppBar from '../../components/AgrotisAppbar/AgrotisAppbar';
import { useNavigate } from 'react-router-dom';
import { ListaRegistros } from '../../components/AgrotisListagem/AgrotisListagem';
import { Registros } from './StyledComponents/Registros';
import AddIcon from '@mui/icons-material/Add';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { NaoEncontrado } from './StyledComponents/NaoEncontrado';

const ListagemAnalisesPage = () => {
  const { formularios } = useAgendamentoAnalise();
  const navigate = useNavigate();


  return (
    <AgrotisBox width={'80%'} sx={{ marginTop: '72px' }}>
      <AgrotisAppBar onClickVoltar={() => navigate('/')} />
      <Registros>
        <Typography sx={{ fontWeight: 'bold', m: 2, lineHeight: '20px' }}>
          Registros({formularios.length})
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button sx={{ m: 2 }} onClick={() => navigate('/cadastro')}>
          Adicionar <AddIcon />
        </Button>
      </Registros>
      {formularios.length === 0 ? (
        <NaoEncontrado>
          <ReportProblemIcon color="warning" />
          <Typography variant="body1">Nenhum cadastro encontrado.</Typography>
        </NaoEncontrado>
      ) : (
        <ListaRegistros agendamentos={formularios} />
      )}
    </AgrotisBox>
  );
};

export default ListagemAnalisesPage;
