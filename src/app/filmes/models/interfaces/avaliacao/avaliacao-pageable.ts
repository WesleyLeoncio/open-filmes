import { Avaliacao } from "./avaliacao";
import { Pageable } from "../pageble";

export interface AvaliacaoPageable {
  content: Avaliacao[],
  pageable: Pageable,
  totalElements: number
  totalPages: number,
}
