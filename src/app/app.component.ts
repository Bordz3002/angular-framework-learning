import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {OneWayCommunicationComponent} from './components/communication/one-way/one-way.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[OneWayCommunicationComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent{
  constructor(){};
}
