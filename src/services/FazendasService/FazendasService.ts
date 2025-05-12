import type { IFazenda } from './FazendasService.types';

const URL =
  'https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json';

export const FazendasService = {
  async listarFazendas(): Promise<IFazenda[]> {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Erro ao buscar os laboratórios');
      }
      const data: IFazenda[] = await response.json();
      return data;
    } catch (error) {
      throw new Error('Erro ao buscar os laboratórios');
    }
  },
};
