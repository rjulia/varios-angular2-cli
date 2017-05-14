import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from "./component/usuario/usuario.component";

import { USUARIO_ROUTES } from "./component/usuario/usuario.routes";





const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    
    { path: 'usuario/:id', 
    component: UsuarioComponent ,
    children:USUARIO_ROUTES
},



    { path: '**', component: HomeComponent },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)