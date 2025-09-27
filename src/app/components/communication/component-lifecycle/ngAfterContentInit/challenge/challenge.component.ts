import {Component, ViewEncapsulation, ChangeDetectionStrategy, AfterContentInit, ContentChildren, ElementRef, QueryList, AfterContentChecked} from '@angular/core';
import {HighlightDirective} from '../../../../../directives/highlightable/highlightable-directive.directive';
@Component({
  selector:'ng-after-content-init-challenge-component',
  standalone:true,
  imports:[HighlightDirective],
  templateUrl:'./challenge.component.html',
  styleUrl:'./challenge.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class NgAfterContentInitChallengeComponent implements AfterContentInit, AfterContentChecked{
  @ContentChildren(HighlightDirective) paragraphs!:QueryList<HighlightDirective>;
  private highlightPElements():void{
    const allParagraphs=this.paragraphs.toArray();
    const first=allParagraphs[0];
    const last=allParagraphs[allParagraphs.length-1];
    allParagraphs.forEach((directive)=>{
      const element=directive.element.nativeElement;
      if(directive===first){
        element.style.background='yellow';
      }
      else if(directive===last){
        element.style.background='blue';
      }
      else{
        element.style.background='transparent';
      }
    })
  }
  ngAfterContentInit():void{
    this.highlightPElements();
  }
  ngAfterContentChecked():void{
    this.highlightPElements();
  }
}
