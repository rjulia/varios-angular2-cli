import { Component, OnInit } from '@angular/core';

//para obtener datos a traves de la ruta 
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    this.router.params.subscribe(parametors=>{

      console.log("Ruta padre");
      
      console.log(parametors);
      
    })
   }

  ngOnInit() {
  }

}
