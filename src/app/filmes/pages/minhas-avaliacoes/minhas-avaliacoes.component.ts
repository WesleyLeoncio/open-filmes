import { Component, OnInit, ViewChild } from '@angular/core';
import { AvaliacaoService } from "../../service/avaliacao.service";
import { UserService } from "../../../shared/service/user.service";
import { UserInfo } from "../../../models/interfaces/user-info";
import { Observable, of } from "rxjs";
import { AvaliacaoPageable } from "../../models/interfaces/avaliacao/avaliacao-pageable";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { catchError, tap } from "rxjs/operators";


@Component({
    selector: 'app-minhas-avaliacoes',
    templateUrl: './minhas-avaliacoes.component.html',
    styleUrls: ['./minhas-avaliacoes.component.scss']
})
export class MinhasAvaliacoesComponent implements OnInit {

    usuario!: UserInfo;

    avaliacoes$: Observable<AvaliacaoPageable> | null = null;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    pageIndex = 0;
    pageSize = 8;

    ngOnInit(): void {
        this.refresh();
    }

    constructor(
        private avaliacaoService: AvaliacaoService,
        private userService: UserService,
    ) {
        this.usuario = this.userService.getUserLoginInfor();
    }

    refresh(pageEvent: PageEvent = {length: 0, pageIndex: 0, pageSize: 8}) {
        this.avaliacoes$ = this.avaliacaoService.listarAvaliacoes(this.usuario.id, pageEvent.pageIndex, pageEvent.pageSize)
            .pipe(
                tap(() => {
                    this.pageIndex = pageEvent.pageIndex;
                    this.pageSize = pageEvent.pageSize;
                }),
                catchError(error => {
                    console.log(`Erro: ${error}`);
                    return of({content: [], totalElements: 0, totalPages: 0})
                })
            )
    }


}
