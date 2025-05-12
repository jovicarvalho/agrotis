import { Button, Typography } from '@mui/material';
import homevideo from '../../assets/video/homeVideo.mp4';
import ScienceIcon from '@mui/icons-material/Science';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BackgroundVideo, Container, Layer } from './StyledComponents/index';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundVideo autoPlay muted loop playsInline src={homevideo} />
      <Layer />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h2">Bem-vindo à Agrotis</Typography>
        <Typography variant="h5">
          Potencialize seus resultados com soluções avançadas para o Agronegócio
        </Typography>
        <Button
          sx={{
            width: '400px',
            borderRadius: '20px',
            height: '50px',
            marginTop: '30px',
          }}
          variant="contained"
          onClick={() => navigate('/cadastro')}
          endIcon={<ArrowForwardIcon />}
        >
          Agende seus testes laboratoriais
          <ScienceIcon />
        </Button>
      </div>
    </Container>
  );
};
