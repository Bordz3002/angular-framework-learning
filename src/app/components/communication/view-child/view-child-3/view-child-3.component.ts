import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector:'view-child-3-component',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./view-child-3.component.html',
  styleUrl:'./view-child-3.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewChild3Component{
  constructor(){};
  public childMessage:string='message from: view child 3 component';
  public childAlert=():void=>{
    window.alert(this.childMessage);
  }
}
