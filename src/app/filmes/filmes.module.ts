import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesRoutingModule } from './filmes-routing.module';
import { ListaFilmesComponent } from './pages/lista-filmes/lista-filmes.component';
import { CardFilmeComponent } from './components/card-filme/card-filme.component';
import { MaterialModule } from "../shared/material/material.module";
import { StarComponent } from "./components/star/star.component";
import { GeneralModule } from "../shared/general/general.module";

@NgModule({
  declarations: [
    ListaFilmesComponent,
    CardFilmeComponent,
    StarComponent,
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    MaterialModule,
    GeneralModule
  ]
})
export class FilmesModule { }
