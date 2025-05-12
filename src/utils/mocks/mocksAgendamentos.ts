import dayjs from 'dayjs';
import type { FormData } from '../../types/agendamentoAnalise/agendamentoAnalise.type';

export const mocksAgendamentos: FormData[] = [
  {
    id: '1',
    nome: 'João Vitor Nunes Carvalho',
    dataInicial: dayjs('2025-05-01'),
    dataFinal: dayjs('2025-05-10'),
    propriedades: [
      {
        id: 2,
        nome: 'Fazenda Wohirish',
      },
    ],
    laboratorio: {
      id: 1,
      nome: 'Agro Skynet',
    },
    observacoes: 'Observações do formulário 1',
  },
  {
    id: '2',
    nome: 'Desenvolvedor Pleno',
    dataInicial: dayjs('2025-05-11'),
    dataFinal: dayjs('2025-05-20'),
    propriedades: [
      {
        id: 1,
        nome: 'Fazenda Agrotis',
      },
    ],
    laboratorio: {
      id: 4,
      nome: 'Skyrim Agro',
    },
    observacoes: 'Observações do formulário 2',
  },
];
