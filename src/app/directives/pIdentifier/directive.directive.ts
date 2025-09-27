import {Directive, ElementRef} from '@angular/core';
@Directive({
  selector:'p-identifier',
  standalone:true
})
export class PIdentifierDirective{
  constructor(public pElement:ElementRef){};
}
