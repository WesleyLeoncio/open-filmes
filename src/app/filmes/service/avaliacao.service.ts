import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AvaliacaoRequest } from "../models/request/avaliacao-request";
import { Observable } from "rxjs";
import { NotaFilme } from "../models/interfaces/nota-filme";
import { SnackBarService } from "../../shared/service/snack-bar.service";
import { FilmePageable } from "../models/interfaces/filme-pageable";

@Injectable({
    providedIn: 'root'
})
export class AvaliacaoService {
    private readonly url: string = environment.apiUrl;


    constructor(
        private http: HttpClient,
        private snackService: SnackBarService
    ) {
    }

    public avaliarFilme(avaliacao: AvaliacaoRequest): Observable<any> {
        return this.http.post(`${this.url}/avaliacoes`, avaliacao);
    }

  public listarAvaliacoes(userId: number, size: number, page: number, sort: string = 'id'): Observable<FilmePageable> {
    let params: HttpParams = new HttpParams()
      .set('size', size)
      .set('page', page)
      .set('sort', sort);

    return this.http.get<FilmePageable>(`${this.url}/avaliacoes/user/${userId}`, {params});
  }

    public buscarNota(filmeId: number, usuarioId: number): Observable<NotaFilme> {
        return this.http.get<NotaFilme>(`${this.url}/avaliacoes/nota/${filmeId}/${usuarioId}`);
    }

    public erro(msgErro: any | string): void {
        msgErro = msgErro.error;
        this.snackService.snackBarOpenTop(msgErro, 5);
    }


}
