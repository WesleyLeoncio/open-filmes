import { Filme } from "../filme/filme";

export interface Avaliacao {
  id: number,
  filme: Filme,
  nota: number
}
