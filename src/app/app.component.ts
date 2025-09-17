import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ContentChildDemo5} from './components/communication/content-child/demo5/demo5.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ContentChildDemo5],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  constructor(){};
}
