import { Component, OnInit } from '@angular/core';
import { AvaliacaoService } from "../../service/avaliacao.service";
import { UserService } from "../../../shared/service/user.service";
import { UserInfo } from "../../../models/interfaces/user-info";

@Component({
  selector: 'app-minhas-avaliacoes',
  templateUrl: './minhas-avaliacoes.component.html',
  styleUrls: ['./minhas-avaliacoes.component.scss']
})
export class MinhasAvaliacoesComponent implements OnInit {
  //TODO CRIAR PARTE DE BUSCAR USER POR EMAIL
  listaAvaliacoesPage!: any;
  listaAvaliacoes!: any;
  usuario!: UserInfo;

  ngOnInit(): void {
    this.getAvaliacoes(this.usuario.id, 8, 0);
  }

  constructor(
    private avaliacao: AvaliacaoService,
    private userService: UserService,
  ) {
    this.usuario = this.userService.getUserLoginInfor();
  }


  getAvaliacoes(userId: number, size: number, page: number): void {
    this.avaliacao.listarAvaliacoes(userId, size, page).subscribe(
      {
        next: avaliacoesPage => {
          this.listaAvaliacoesPage = avaliacoesPage;
          this.listaAvaliacoes = avaliacoesPage.content;
        }
      }
    )
  }

}
