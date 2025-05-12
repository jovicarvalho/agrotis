import { z } from 'zod';
import dayjs, { Dayjs } from 'dayjs';

export const agendamentoAnaliseSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  dataInicial: z.custom<Dayjs>((val) => dayjs.isDayjs(val), {
    message: 'Data inicial inválida',
  }),
  dataFinal: z.custom<Dayjs>((val) => dayjs.isDayjs(val), {
    message: 'Data final inválida',
  }),
  propriedades: z
    .array(
      z.object({
        id: z.number(),
        nome: z.string(),
      })
    )
    .min(1, 'Selecione pelo menos uma fazenda'),
  laboratorio: z
    .object({
      id: z.number(),
      nome: z.string(),
    })
    .nullable(),
  observacoes: z.string().optional(),
});

export type FormData = z.infer<typeof agendamentoAnaliseSchema>;
