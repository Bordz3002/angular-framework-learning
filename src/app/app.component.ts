import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ContentChildDemo3Component} from './components/communication/content-child/demo3/demo3.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ContentChildDemo3Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  constructor(){};
}
