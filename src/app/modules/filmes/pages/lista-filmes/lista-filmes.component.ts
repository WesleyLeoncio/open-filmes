import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmeService } from "../../service/filme.service";
import { FilmePageable } from "../../models/interfaces/filme/filme-pageable";
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent implements OnInit {

  filmes$: Observable<FilmePageable> | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageIndex = 0;
  pageSize = 8;

  ngOnInit(): void {

  }

  constructor(
    private filmeService: FilmeService,
  ) {
    this.refresh();
  }

  refresh(pageEvent: PageEvent = {length: 0, pageIndex: 0, pageSize: 8}) {
    this.filmes$ = this.filmeService.listarFilmes(pageEvent.pageIndex, pageEvent.pageSize)
      .pipe(
        tap(() => {
          this.pageIndex = pageEvent.pageIndex;
          this.pageSize = pageEvent.pageSize;
        }),
        catchError(error => {
          console.log(`Erro: ${error}`);
          return of({content: [], totalElements: 0, totalPages: 0})
        })
      );
  }


}
