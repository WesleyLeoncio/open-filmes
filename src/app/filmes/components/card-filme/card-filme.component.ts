import { Component, Input, OnInit } from '@angular/core';
import { Filme } from "../../models/interfaces/filme";
import { AvaliacaoService } from "../../service/avaliacao.service";
import { AvaliacaoRequest } from "../../models/request/avaliacao-request";
import { UserService } from "../../../shared/service/user.service";
import { UserInfo } from "../../../models/interfaces/user-info";

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.scss']
})
export class CardFilmeComponent implements OnInit {
  @Input()
  filme!: Filme;
  usuario!: UserInfo;
  nota: number = 0;

  ngOnInit(): void {
    this.verificarNota();
  }

  constructor(
      private avaliacaoService: AvaliacaoService,
      private userService: UserService
  ) {
    this.usuario = this.userService.getUserTesteRemoverEsseMetodo()
  }

  salvarNota(nota: number): void {
    this.avaliacaoService.avaliarFilme(new AvaliacaoRequest(this.filme.id, this.usuario.id, nota));
  }

  verificarNota(){
    this.avaliacaoService.buscarNota(this.filme.id, this.usuario.id).subscribe(
      {
        next: avaliacao =>  this.validarNota(<number>avaliacao),
        error: err => console.log(`ERROR: ${err}`)
      }
    )
  }

  validarNota(nota: number){
    if(nota && nota != 0){
      this.nota = nota;
    }else{
      this.nota = 0;
    }

  }


}
