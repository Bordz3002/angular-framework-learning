import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ContentChildDemo6} from './components/communication/content-child/demo6/demo6.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ContentChildDemo6],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  constructor(){};
}
