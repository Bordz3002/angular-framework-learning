import {Component, ViewEncapsulation, ChangeDetectionStrategy, AfterContentChecked, ContentChildren, QueryList, ElementRef, Renderer2} from '@angular/core';
import {PIdentifierDirective} from '../../../../../directives/pIdentifier/directive.directive';
@Component({
  selector:'ng-after-content-checked-component',
  standalone:true,
  imports:[PIdentifierDirective],
  templateUrl:'./demo.component.html',
  styleUrls:['./demo.component.css'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.Default
})
export class NgAfterContentCheckedDemoComponent implements AfterContentChecked{
  @ContentChildren(PIdentifierDirective) pElements!:QueryList<PIdentifierDirective>;
  public notEmpty:boolean=false;
  constructor(private renderer:Renderer2){};
  ngAfterContentChecked():void{
    const allPElements=this.pElements.toArray();
    const last=allPElements[allPElements.length-1];
    this.notEmpty=allPElements.length>0;
    allPElements.forEach(element=>{
      if(element!==last){ this.renderer.setStyle(element.pElement.nativeElement, 'background', 'blue');}
      else{ this.renderer.removeStyle(element.pElement.nativeElement, 'background');}
    })
  }
}
