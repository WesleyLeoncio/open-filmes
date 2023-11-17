import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { authGuard } from "./security/auth.guard";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: '', component: DashboardComponent,
    //canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
