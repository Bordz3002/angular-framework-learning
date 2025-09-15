import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector:'content-child-demo3',
  standalone:true,
  imports:[],
  templateUrl:'./demo3.component.html',
  styleUrls:['./demo3.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildDemo3Component{
  constructor(){};
}
