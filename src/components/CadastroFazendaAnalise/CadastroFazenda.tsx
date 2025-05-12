import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '../../components/AgrotisTextField/AgrotisTextField';
import {
  Container,
  FazendaLaboratorio,
  NomeDatas,
  Obervacoes,
} from './Styledcomponents/index';
import DatePicker from '../../components/AgrotisDatePicker/AgrotisDatePicker';
import CheckMark from '../../components/AgrotisCheckMark/AgrotisCheckMark';
import Select from '../../components/AgrotisSelect/AgrotisSelect';
import { LaboratoriosService } from '../../services/LaboratoriosService/LaboratoriosService';
import { type ILaboratorio } from '../../services/LaboratoriosService/LaboratoriosService.type';
import { FazendasService } from '../../services/FazendasService/FazendasService';
import { type IFazenda } from '../../services/FazendasService/FazendasService.types';
import AgrotisAppBar from '../../components/AgrotisAppbar/AgrotisAppbar';
import AgrotisBox from '../../components/AgrotisBox';
import { useAgendamentoAnalise } from '../../context/AgendamentoAnaliseContext/AgendamentoAnaliseContext';
import type { FormData } from '../../types/agendamentoAnalise/agendamentoAnalise.type';
import { useNavigate } from 'react-router-dom';

const CadastroFazenda = () => {
  const { salvar } = useAgendamentoAnalise();
  const { control, handleSubmit, register } = useForm<FormData>();
  const navigate = useNavigate();

  const [valoresLaboratorio, setValoresLaboratorio] = useState<ILaboratorio[]>(
    []
  );
  const [opcoesFazendas, setOpcoesFazendas] = useState<IFazenda[]>([]);

  useEffect(() => {
    LaboratoriosService.listarLaboratorios().then(setValoresLaboratorio);
    FazendasService.listarFazendas().then(setOpcoesFazendas);
  }, []);

  const onSubmit = (data: FormData) => {
    salvar(data);
    navigate('/listagem');
  };

  return (
    <AgrotisBox width={'80%'} sx={{ marginTop: '72px' }}>
      <AgrotisAppBar
        onClickVoltar={() => navigate('/')}
        exibirBotaoSalvar
        onSalvar={handleSubmit(onSubmit)}
      />
      <Container>
        <NomeDatas>
          <TextField
            fullWidth
            title="Nome"
            label="Nome*"
            variant="standard"
            {...register('nome')}
          />

          <Controller
            name="dataInicial"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Data Inicial *"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            name="dataFinal"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Data Final *"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </NomeDatas>

        <FazendaLaboratorio>
          <Controller
            name="propriedades"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <CheckMark
                getLabel={(fazenda) => fazenda.nome}
                label="Fazendas"
                onChange={field.onChange}
                selecionados={field.value}
                opcoes={opcoesFazendas}
              />
            )}
          />

          <Controller
            name="laboratorio"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                values={valoresLaboratorio}
                selectedValue={field.value ? [field.value] : []}
                onChange={(items) => field.onChange(items[0] || null)}
                getLabel={(lab) => lab.nome}
                getValue={(lab) => lab.id.toString()}
                label="Laboratório"
              />
            )}
          />
        </FazendaLaboratorio>

        <Obervacoes>
          <TextField
            fullWidth
            title="Observações"
            label="Observações"
            variant="standard"
            {...register('observacoes')}
          />
        </Obervacoes>
      </Container>
    </AgrotisBox>
  );
};

export default CadastroFazenda;
