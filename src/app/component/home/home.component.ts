import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>

  <p>Estoy en app-cpomponent</p>
  <app-clases></app-clases>
  <p [appResaltado]="['orange','black']">

    Hola mundo
    {{texto}}
  </p>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
