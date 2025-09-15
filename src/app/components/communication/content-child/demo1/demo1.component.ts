import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector:'content-child-demo1',
  standalone:true,
  imports:[],
  templateUrl:'./demo1.component.html',
  styleUrl:'./demo1.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildDemo1Component{
  constructor(){};
}
