import { Produto } from './produto';

export interface Historico {
  data: Date;
  itens: Produto[];
}
