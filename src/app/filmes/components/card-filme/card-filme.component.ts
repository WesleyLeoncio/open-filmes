import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Filme } from "../../models/interfaces/filme";
import { AvaliacaoService } from "../../service/avaliacao.service";
import { AvaliacaoRequest } from "../../models/request/avaliacao-request";
import { UserService } from "../../../shared/service/user.service";
import { UserInfo } from "../../../models/interfaces/user-info";
import { MatDialog } from "@angular/material/dialog";
import { ModalFilmeComponent } from "../modal/modal-filme/modal-filme.component";

@Component({
    selector: 'app-card-filme',
    templateUrl: './card-filme.component.html',
    styleUrls: ['./card-filme.component.scss']
})
export class CardFilmeComponent implements OnInit, OnDestroy {
    @Input()
    filme!: Filme;
    usuario!: UserInfo;
    nota: number = 0;

    //TODO REFATORAR

    ngOnInit(): void {
        this.verificarNota();
    }

    ngOnDestroy(): void {
        this.dialog.ngOnDestroy();
    }

    constructor(
        private avaliacaoService: AvaliacaoService,
        private userService: UserService,
        private dialog: MatDialog,
    ) {
        this.usuario = this.userService.getUserLoginInfor();
    }


    salvarNota(nota: number): void {
        this.avaliacaoService.avaliarFilme(new AvaliacaoRequest(this.filme.id, this.usuario.id, nota))
            .subscribe(
                {
                    next: result => {
                        this.nota = nota;
                        return result;
                    },
                    error: err => {
                        this.avaliacaoService.erro(err);
                    }
                }
            );
    }

    verificarNota(): void {
        this.avaliacaoService.buscarNota(this.filme.id, this.usuario.id).subscribe(
            {
                next: notaFilme => this.validarNota(notaFilme.nota),
                error: err => console.log(`ERROR: ${err}`)
            }
        )
    }

    validarNota(nota: number) {
        if (nota && nota != 0) {
            this.nota = nota;
        } else {
            this.nota = 0;
        }
    }


    openModal(): void {
        this.dialog.open(ModalFilmeComponent, {
            data: {
                filme: this.filme,
                userId: this.usuario.id,
                nota: this.nota
            },
            disableClose: true
        }).afterClosed().subscribe(notaModal => {
            if (notaModal) {
                this.nota = notaModal;
            }
        });
    }


}
