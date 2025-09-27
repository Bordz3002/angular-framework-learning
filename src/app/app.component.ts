import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PIdentifierDirective} from './directives/pIdentifier/directive.directive';
import {NgAfterContentCheckedDemoComponent} from './components/communication/component-lifecycle/ngAfterContentChecked/demo/demo.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule, PIdentifierDirective, NgAfterContentCheckedDemoComponent],
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  public texts:string[]=[];
  public add(arg:string):void{ if(arg){ this.texts.push(arg);}}
  public remove():void{ if(this.texts.length>0){ this.texts.pop();}}
}
