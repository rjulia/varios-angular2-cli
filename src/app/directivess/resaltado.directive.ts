import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { 

    console.log("directiva llamada");
    // el.nativeElement.style.backgroundColor = "#f2f"
    
  }

  @Input("appResaltado") nuevoColor:Array<string>;
 

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor[0] || 'yellow', this.nuevoColor[1]);

    
    // this.el.nativeElement.style.backgroundColor = "#f2f"
    // this.el.nativeElement.style.cursor = "pointer"
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null, null);
  }

  private resaltar ( color:string, backgroundColor:string){
    this.el.nativeElement.style.color = color
    this.el.nativeElement.style.backgroundColor = backgroundColor
  }


}
