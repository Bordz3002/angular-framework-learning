import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector:'view-child-2-component',
  standalone:true,
  imports:[],
  templateUrl:'./view-child-2.component.html',
  styleUrl:'./view-child-2.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewChild2Component{
  constructor(){};
  public notify=():void=>{
    window.alert("this is a message window from view child 2");
  }
}
