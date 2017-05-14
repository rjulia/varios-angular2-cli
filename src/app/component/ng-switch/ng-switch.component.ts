import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta:string = 'success'
  lista:Array<string> = [];
 number:number
  getRandomSpan(){
      this.number = 0;
      this.number = Math.floor((Math.random()*3));
      return this.number
    }
  constructor() {
      this.lista = ['success','info','warning', '']
      console.log(this.getRandomSpan()); 
      this.alerta = this.lista[this.getRandomSpan()]
      console.log(this.alerta);
      
    
   }

  ngOnInit() {
  }

  
  
}

