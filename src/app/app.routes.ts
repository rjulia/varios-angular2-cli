import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from "./component/usuario/usuario.component";
import { UsuarioNuevoComponent } from "./component/usuario/usuario-nuevo.component";
import { UsuarioEditarComponent } from "./component/usuario/usuario-editar.component";
import { UsuarioDetalleComponent } from "./component/usuario/usuario-detalle.component";




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    
    { path: 'usuario/:id', 
    component: UsuarioComponent ,
    children:[
        { path: 'nuevo', component: UsuarioNuevoComponent },
        { path: 'detalle', component: UsuarioDetalleComponent },
        { path: 'editar', component: UsuarioEditarComponent },
        { path: '**', pathMatch:'full', redirectTo: 'nuevo' },
    ]
},



    { path: '**', component: HomeComponent },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)