import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {TwoWayChallengeComponent} from './components/communication/two-way-challenge/two-way-challenge.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[TwoWayChallengeComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  constructor(){};
  public username:string='alice';
  public reset=():void=>{
    this.username='alice';
  }
}
