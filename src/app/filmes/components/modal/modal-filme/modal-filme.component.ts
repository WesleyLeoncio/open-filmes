import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ModalInfor } from "../../../models/interfaces/modal-infor";
import { AvaliacaoService } from "../../../service/avaliacao.service";
import { AvaliacaoRequest } from "../../../models/request/avaliacao-request";

@Component({
  selector: 'app-modal-filme',
  templateUrl: './modal-filme.component.html',
  styleUrls: ['./modal-filme.component.scss']
})
export class ModalFilmeComponent implements OnInit{
  //TODO REFATORAR COMPONENETE

  filmeAv!: ModalInfor;

  ngOnInit(): void {

  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalInfor,
    private avaliacaoService: AvaliacaoService,
    public dialogRef: MatDialogRef<ModalFilmeComponent>

  ) {
    this.filmeAv = data;
  }


  salvarNota(nota: number): void {
    this.avaliacaoService.avaliarFilme(new AvaliacaoRequest(this.filmeAv.filme.id, this.filmeAv.userId, nota));
    this.filmeAv.nota = nota;
  }


  fecharModal():void{
    this.dialogRef.close(this.filmeAv.nota);
  }

}
