import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgAfterContentInitChallengeComponent} from './components/communication/component-lifecycle/ngAfterContentInit/challenge/challenge.component';
import {HighlightDirective} from './directives/highlightable/highlightable-directive.directive';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[NgAfterContentInitChallengeComponent, CommonModule, HighlightDirective],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  public texts:string[]=[];
  public add(arg:string):void{
    if(arg){  this.texts.push(arg);}
  }
}
