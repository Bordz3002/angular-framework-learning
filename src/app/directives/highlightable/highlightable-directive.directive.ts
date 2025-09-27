import {Directive, ElementRef} from '@angular/core';
@Directive({
  selector:'[highlight]',
  standalone:true
})
export class HighlightDirective{
  constructor(public element:ElementRef){};
}
