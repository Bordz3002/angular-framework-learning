import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ContentChildDemo4Component} from './components/communication/content-child/demo4/demo4.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ContentChildDemo4Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  constructor(){};
}
