import { Directive, ElementRef} from '@angular/core';
import {  OnInit } from '@angular/core';
@Directive({
  selector: '[appFocus]'
})


export class FocusDirective {
  constructor(private el:ElementRef) {
  
   
    }
   ngOnInit(){
    this.el.nativeElement.focus()
   }


}
