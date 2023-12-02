import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FilmePageable } from "../models/interfaces/filme/filme-pageable";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private readonly url: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) {
  }

  public listarFilmes(size: number,page: number, sort: string = 'id'): Observable<FilmePageable> {
    let params: HttpParams = new HttpParams()
      .set('size', size)
      .set('page', page)
      .set('sort', sort);

    return this.http.get<FilmePageable>(`${this.url}/filmes`, {params});
  }
}
