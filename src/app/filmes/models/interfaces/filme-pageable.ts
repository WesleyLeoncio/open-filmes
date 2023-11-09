import { Filme } from "./filme";
import { Pageable } from "./pageble";

export interface FilmePageable {
    content: Filme[],
    pageable: Pageable,
    totalElements: number
    totalPages: number,

}
