import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { AgrotisHeader } from './components/AgrotisHeader/AgrotisHeader';
import CadastroFazenda from './pages/CadastroFazendaAnalise/CadastroFazenda';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AgrotisThemeProvider } from './context/AgrotisThemeContext/AgrotisThemeContext';
import ListagemAnalises from './pages/ListagemAnalises/ListagemAnalise';
import { AgendamentoAnaliseProvider } from './context/AgendamentoAnaliseContext/AgendamentoAnaliseContext';
import EdicaoAgendamentoPage from './pages/EdicaoFazendaAnalise/EdicaoFazendaAnalise';

const App = () => {
  return (
    <AgrotisThemeProvider>
      <AgendamentoAnaliseProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <AgrotisHeader />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/cadastro" element={<CadastroFazenda />} />
              <Route path="/listagem" element={<ListagemAnalises />} />
              <Route path="/edicao/:id" element={<EdicaoAgendamentoPage />} />
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </AgendamentoAnaliseProvider>
    </AgrotisThemeProvider>
  );
};

export default App;
