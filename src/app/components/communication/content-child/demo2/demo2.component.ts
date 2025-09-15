import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector:'content-child-demo2',
  standalone:true,
  imports:[],
  templateUrl:'./demo2.component.html',
  styleUrl:'./demo2.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildDemo2Component{
  constructor(){};
}
