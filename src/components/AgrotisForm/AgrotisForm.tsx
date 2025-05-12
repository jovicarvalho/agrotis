import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '../AgrotisTextField/AgrotisTextField';
import {
  Container,
  FazendaLaboratorio,
  NomeDatas,
  Obervacoes,
} from './Styledcomponents/index';
import DatePicker from '../AgrotisDatePicker/AgrotisDatePicker';
import CheckMark from '../AgrotisCheckMark/AgrotisCheckMark';
import Select from '../AgrotisSelect/AgrotisSelect';
import type { FormData } from '../../types/agendamentoAnalise/agendamentoAnalise.type';
import useLabsFazendas from '../../hooks/useLabsFazendas';

interface Props {
  onChange?: (data: Partial<FormData>) => void;
}

const AgrotisForm = ({ onChange }: Props) => {
  const { control, register, watch } = useFormContext<FormData>();

  const { opcoesFazendas, valoresLaboratorio } = useLabsFazendas();

  useEffect(() => {
    if (onChange) {
      const subscription = watch((value) =>
        onChange(value as Partial<FormData>)
      );
      return () => subscription.unsubscribe();
    }
  }, [watch, onChange]);

  return (
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
  );
};

export default AgrotisForm;
