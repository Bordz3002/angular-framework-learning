import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector:'view-child-1-component',
  standalone:true,
  imports:[],
  templateUrl:'./view-child-1.component.html',
  styleUrl:'./view-child-1.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ViewChild1Component{
  constructor(){};
  public text:string='text from view child 1 component';
}
