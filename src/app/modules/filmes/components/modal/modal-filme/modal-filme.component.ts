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
export class ModalFilmeComponent implements OnInit {
    //TODO REFATORAR COMPONENETE


    ngOnInit(): void {

    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: ModalInfor,
        private avaliacaoService: AvaliacaoService,
        public dialogRef: MatDialogRef<ModalFilmeComponent>
    ) {}


    salvarNota(nota: number): void {
        this.avaliacaoService.avaliarFilme(new AvaliacaoRequest(this.data.filme.id, this.data.userId, nota))
            .subscribe(
                {
                    next: result => {
                        this.data.nota = nota;
                        return result;
                    },
                    error: err => this.avaliacaoService.erro(err)
                }
            )
    }


    fecharModal(): void {
        this.dialogRef.close(this.data.nota);
    }

}
