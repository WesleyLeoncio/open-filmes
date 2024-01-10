import { Categoria } from "../../categoria";

export interface Filme {
  id: number,
  nome: string,
  descricao: string,
  dataLancamento: Date,
  duracao: string,
  imagem: string,
  categorias: Categoria[]
}
