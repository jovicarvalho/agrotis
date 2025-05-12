import type { Dayjs } from 'dayjs';

export type FormData = {
  id?: string;
  nome: string;
  dataInicial: Dayjs;
  dataFinal: Dayjs;
  propriedades: { id: number; nome: string }[];
  laboratorio: { id: number; nome: string } | null;
  observacoes?: string;
};

export type AgendamentoAnaliseContextType = {
  formularios: FormData[];
  salvar: (form: Omit<FormData, 'id'>, idEditando?: string) => void;
  deletar: (id: string) => void;
  listar: () => FormData[];
  popularFormularios: (novosFormularios: FormData[]) => void;
};
