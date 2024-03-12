import { Categoria } from "../../categoria";

export interface Filme {
  id: string,
  nome: string,
  descricao: string,
  dataLancamento: Date,
  duracao: string,
  imagem: string,
  categorias: Categoria[]
}
