import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmesComponent } from "./pages/lista-filmes/lista-filmes.component";

const routes: Routes = [
  {
    path: '',
    component: ListaFilmesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule {
}
