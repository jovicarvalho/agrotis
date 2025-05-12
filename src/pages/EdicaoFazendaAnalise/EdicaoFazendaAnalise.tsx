// src/pages/EdicaoAgendamentoPage.tsx
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
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const EdicaoAgendamentoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { formularios, salvar } = useAgendamentoAnalise();
  const agendamento = formularios.find((item) => item.id === id);
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

  useEffect(() => {
    if (agendamento) {
      methods.reset({
        nome: agendamento.nome,
        dataInicial: dayjs(agendamento.dataInicial),
        dataFinal: dayjs(agendamento.dataFinal),
        propriedades: agendamento.propriedades,
        laboratorio: agendamento.laboratorio ?? null,
        observacoes: agendamento.observacoes,
      });
    }
  }, [agendamento, methods]);

  const onSubmit = (data: FormData) => {
    const formDataToSubmit = {
      ...data,
      id,
      laboratorio: data.laboratorio ?? null,
    };

    salvar(formDataToSubmit, id);
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

export default EdicaoAgendamentoPage;
