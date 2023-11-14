import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AvaliacaoRequest } from "../models/request/avaliacao-request";
import { Observable } from "rxjs";
import { NotaFilme } from "../models/interfaces/nota-filme";
import { SnackBarService } from "../../shared/service/snack-bar.service";

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

    public avaliacaoFilmes(filmeId: number, usuarioId: number): Observable<any> {
        return this.http.get<any>(`${this.url}/avaliacoes/avaliacao/${filmeId}/${usuarioId}`);
    }

    public buscarNota(filmeId: number, usuarioId: number): Observable<NotaFilme> {
        return this.http.get<NotaFilme>(`${this.url}/avaliacoes/nota/${filmeId}/${usuarioId}`);
    }

    public erro(msgErro: any | string): void {
        msgErro = msgErro.error;
        this.snackService.snackBarOpenTop(msgErro, 5);
    }


}
