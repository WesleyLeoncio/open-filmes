import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ModalInfor } from "../../../models/interfaces/modal-infor";
import { AvaliacaoService } from "../../../service/avaliacao.service";
import { AvaliacaoRequest } from "../../../models/request/avaliacao-request";
import { AvaliacaoFilme } from "../../../models/interfaces/avaliacao-filme";


@Component({
  selector: 'app-modal-filme',
  templateUrl: './modal-filme.component.html',
  styleUrls: ['./modal-filme.component.scss']
})
export class ModalFilmeComponent implements OnInit{
  //TODO REFATORAR COMPONENETE
  avaliacao!: AvaliacaoFilme;


  ngOnInit(): void {
    this.buscarAvaliacoes();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalInfor,
    private avaliacaoService: AvaliacaoService
  ) {}

  buscarAvaliacoes(): void {
    this.avaliacaoService.avaliacaoFilmes(this.data.filmeId, this.data.userId).subscribe(
      {
        next: avaliacao => {
          this.avaliacao = avaliacao
        },
        error: err => console.log(`ERROR: ${err}`)
      }
    )
  }

  salvarNota(nota: number): void {
    this.avaliacaoService.avaliarFilme(new AvaliacaoRequest(this.data.filmeId, this.data.userId, nota));
  }


    protected readonly print = print;
}
