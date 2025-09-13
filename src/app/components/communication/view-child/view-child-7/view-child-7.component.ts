import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
@Component({
  selector:'view-child-7-component',
  standalone:true,
  imports:[],
  templateUrl:'./view-child-7.component.html',
  styleUrl:'./view-child-7.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ViewChild7Component{
  constructor(){};
  @Input() childComponentName!:string;
}
