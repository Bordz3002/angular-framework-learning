import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {TwoWayP2Component} from './components/communication/two-way-p2/two-way-p2.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[TwoWayP2Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  constructor(){};
  public count:number=0;
  public reset=():void=>{
    this.count=0;
  }
}
