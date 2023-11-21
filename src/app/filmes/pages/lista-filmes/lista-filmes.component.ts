import { Component, OnInit } from '@angular/core';
import { FilmeService } from "../../service/filme.service";
import { Filme } from "../../models/interfaces/filme";
import { FilmePageable } from "../../models/interfaces/filme-pageable";

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent implements OnInit {
  //TODO REFATORAR O METODO DE LISTAR COLOCAR OBSERVABLE OU IMPLEMNTAR O ON DESTROI
  listaFilmesPage!: FilmePageable;
  listaFilmes!: Filme[];

  ngOnInit(): void {
    this.getFilmes(8, 1);
  }
  constructor(
    private filmeService: FilmeService,
  ) {}

 getFilmes(size: number,page: number): void{
   this.filmeService.listarFilmes(size, page).subscribe(
     {
       next: pageFilme =>{
         this.listaFilmesPage = pageFilme;
         this.listaFilmes = pageFilme.content;
       }
     }
   )
 }



}
