import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AvaliacaoRequest } from "../models/request/avaliacao-request";

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private readonly url: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  public avaliarFilme(avaliacao: AvaliacaoRequest):void{
    this.http.post(`${this.url}/avaliacoes`, avaliacao).subscribe(
        {
          next: value => console.log(value),
          error: err => console.log(err.error)
        }
    )
  }

  public buscarNota(filmeId: number, usuarioId: number){
      return this.http.get(`${this.url}/avaliacoes/nota/${filmeId}/${usuarioId}`)
  }
}
