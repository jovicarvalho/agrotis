import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  agendamentoAnaliseSchema,
  type FormData,
} from '../../schemas/agendamentoAnaliseSchema';
import AgrotisAppBar from '../../components/AgrotisAppbar/AgrotisAppbar';
import AgrotisBox from '../../components/AgrotisBox';
import AgrotisForm from '../../components/AgrotisForm/AgrotisForm';
import { useAgendamentoAnalise } from '../../context/AgendamentoAnaliseContext/AgendamentoAnaliseContext';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const CadastroAgendamentoPage = () => {
  const navigate = useNavigate();
  const methods = useForm<FormData>({
    resolver: zodResolver(agendamentoAnaliseSchema),
    defaultValues: {
      nome: '',
      dataInicial: dayjs(),
      dataFinal: dayjs(),
      propriedades: [],
      laboratorio: null,
      observacoes: '',
    },
  });

  const { salvar } = useAgendamentoAnalise();

  const onSubmit = (data: FormData) => {
    const formDataToSubmit = {
      ...data,
      laboratorio: data.laboratorio ?? null,
    };

    salvar(formDataToSubmit);
    navigate('/listagem');
  };
  return (
    <FormProvider {...methods}>
      <AgrotisBox width={'80%'} sx={{ marginTop: '72px' }}>
        <AgrotisAppBar
          exibirBotaoSalvar
          onSalvar={methods.handleSubmit(onSubmit)}
          onClickVoltar={() => navigate('/')}
        />
        <AgrotisForm />
      </AgrotisBox>
    </FormProvider>
  );
};

export default CadastroAgendamentoPage;
