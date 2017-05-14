import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { NgStyleComponent } from './component/ng-style/ng-style.component';
import { CssComponent } from './component/css/css.component';
import { ClasesComponent } from './component/clases/clases.component';
import { ResaltadoDirective } from './directivess/resaltado.directive';
import { NgSwitchComponent } from './component/ng-switch/ng-switch.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioNuevoComponent } from './component/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './component/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './component/usuario/usuario-detalle.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
