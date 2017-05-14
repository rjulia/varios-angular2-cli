import { Component, OnInit } from '@angular/core';


//para obtener datos a traves de la ruta 
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    this.router.parent.params.subscribe(parametors=>{

      console.log("Ruta HIJA Usuario Nuevo");
      
      console.log(parametors);
      
    })
  }
  ngOnInit() {
  }

}
