import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      Hola mundo desde app - component CSS
    </p>
  `,
  styles: [
   `   p {
        color: red;
      }`
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
