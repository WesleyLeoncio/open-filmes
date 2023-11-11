import { Component, OnInit } from '@angular/core';
import { FilmeService } from "../../service/filme.service";
import { Filme } from "../../models/interfaces/filme";
import { FilmePageable } from "../../models/interfaces/filme-pageable";
import { UserService } from "../../../shared/service/user.service";

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
    this.getFilmes(8, 0);
  }
  constructor(
    private filmeService: FilmeService,
    private userService: UserService
  ) {}

 getFilmes(size: number,page: number): void{
   this.filmeService.listarFilmes(size, page).subscribe(
     {
       next: pageFilme =>{
         this.listaFilmesPage = pageFilme;
         this.listaFilmes = pageFilme.content;
       },
       error: err => this.logout(err.status)
     }
   )
 }

 //TODO REFATORAR
  logout(status: number): void{
    if(status == 401){
      this.userService.logout();
    }
  }

}
