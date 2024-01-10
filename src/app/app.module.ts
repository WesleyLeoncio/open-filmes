import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/usuarios/pages/dashboard/dashboard.component';
import { LoginComponent } from './modules/usuarios/pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from "./security/auth.interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./shared/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CadastroComponent } from './modules/usuarios/pages/cadastro/cadastro.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { GeneralModule } from "./shared/general/general.module";
import { MenuUserComponent } from './shared/components/menu-user/menu-user.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    MenuUserComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    GeneralModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
