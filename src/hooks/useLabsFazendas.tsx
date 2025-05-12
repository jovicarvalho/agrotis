import { useEffect, useState } from 'react';
import { LaboratoriosService } from '../services/LaboratoriosService/LaboratoriosService';
import { FazendasService } from '../services/FazendasService/FazendasService';
import { type ILaboratorio } from '../services/LaboratoriosService/LaboratoriosService.type';
import { type IFazenda } from '../services/FazendasService/FazendasService.types';

const useLabsFazendas = () => {
  const [valoresLaboratorio, setValoresLaboratorio] = useState<ILaboratorio[]>(
    []
  );
  const [opcoesFazendas, setOpcoesFazendas] = useState<IFazenda[]>([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const laboratorios = await LaboratoriosService.listarLaboratorios();
        setValoresLaboratorio(laboratorios);

        const fazendas = await FazendasService.listarFazendas();
        setOpcoesFazendas(fazendas);
      } catch (error) {
        console.error('Erro ao carregar os dados', error);
      }
    };

    carregarDados();
  }, []);

  return { valoresLaboratorio, opcoesFazendas };
};

export default useLabsFazendas;
