import { Filme } from "./filme";

export interface FilmePageable {
    content: Filme[],
    totalElements: number
    totalPages: number,
}
