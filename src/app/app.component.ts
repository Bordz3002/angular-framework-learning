import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ContentChildDemo1Component} from './components/communication/content-child/demo1/demo1.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ContentChildDemo1Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  constructor(){};
}
