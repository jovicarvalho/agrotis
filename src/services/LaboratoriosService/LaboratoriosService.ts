import type { ILaboratorio } from './LaboratoriosService.type';

const URL =
  'https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json';

export const LaboratoriosService = {
  async listarLaboratorios(): Promise<ILaboratorio[]> {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Erro ao buscar os laboratórios');
      }
      const data: ILaboratorio[] = await response.json();
      return data;
    } catch (error) {
      console.error('Erro no LaboratoriosService:', error);
      return [];
    }
  },
};
