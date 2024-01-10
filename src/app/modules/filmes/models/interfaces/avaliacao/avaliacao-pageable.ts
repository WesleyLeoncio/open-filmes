import { Avaliacao } from "./avaliacao";

export interface AvaliacaoPageable {
  content: Avaliacao[],
  totalElements: number
  totalPages: number,
}
