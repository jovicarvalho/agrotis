import { createContext, useContext, useEffect, useState } from 'react';
import type {
  AgendamentoAnaliseContextType,
  FormData,
} from '../../types/agendamentoAnalise/agendamentoAnalise.type';
import { mocksAgendamentos } from '../../utils/mocks/mocksAgendamentos';

const AgendamentoAnaliseContext = createContext<AgendamentoAnaliseContextType>({
  formularios: [],
  salvar: () => {},
  deletar: () => {},
  listar: () => [],
  popularFormularios: () => {},
});

export const AgendamentoAnaliseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formularios, setFormularios] = useState<FormData[]>(mocksAgendamentos);
  const [contador, setContador] = useState<number>(2);

  useEffect(() => {
    const localFormularios = localStorage.getItem('formularios');
    const localContador = localStorage.getItem('contador');

    if (localFormularios) {
      setFormularios(JSON.parse(localFormularios));
    }

    if (localContador) {
      setContador(Number(localContador));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formularios', JSON.stringify(formularios));
    localStorage.setItem('contador', contador.toString());
  }, [formularios, contador]);

  const salvar = (form: Omit<FormData, 'id'>, idEditando?: string) => {
    if (idEditando) {
      setFormularios((prev) =>
        prev.map((f) => (f.id === idEditando ? { ...form, id: idEditando } : f))
      );
    } else {
      const novoFormulario = { ...form, id: (contador + 1).toString() };
      setFormularios((prev) => [...prev, novoFormulario]);
      setContador((prev) => prev + 1);
    }
  };

  const deletar = (id: string) => {
    setFormularios((prev) => prev.filter((f) => f.id !== id));
  };

  const listar = () => formularios;

  const popularFormularios = (novosFormularios: FormData[]) => {
    setFormularios(novosFormularios);
    const maiorId = novosFormularios.reduce((max, f) => {
      const idNum = parseInt(f.id ?? '0', 10);
      return isNaN(idNum) ? max : Math.max(max, idNum);
    }, 0);
    setContador(maiorId);
  };

  return (
    <AgendamentoAnaliseContext.Provider
      value={{ formularios, salvar, deletar, listar, popularFormularios }}
    >
      {children}
    </AgendamentoAnaliseContext.Provider>
  );
};

export const useAgendamentoAnalise = () =>
  useContext(AgendamentoAnaliseContext);
