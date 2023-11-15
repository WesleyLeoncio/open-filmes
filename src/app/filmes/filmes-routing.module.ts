import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmesComponent } from "./pages/lista-filmes/lista-filmes.component";
import { MinhasAvaliacoesComponent } from "./pages/minhas-avaliacoes/minhas-avaliacoes.component";

const routes: Routes = [
  {
    path: '',
    component: ListaFilmesComponent
  },
  {
    path: 'avaliacoes',
    component: MinhasAvaliacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule {
}
