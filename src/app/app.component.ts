import {Component, ViewEncapsulation} from '@angular/core';
import {OneWayChallengeComponent} from './components/communication/one-way-challenge/one-way-challenge.component';
@Component({
  selector:'one-way-communication-challenge',
  standalone:true,
  imports:[OneWayChallengeComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent{
  constructor(){};
  public message:string='hello from parent';
}
