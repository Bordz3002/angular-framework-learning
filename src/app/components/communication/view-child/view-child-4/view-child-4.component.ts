import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector:'view-child-4-component',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./view-child-4.component.html',
  styleUrl:'./view-child-4.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewChild4Component{
  constructor(){};
  public message!:string;
  public alertMessage=():void=>{
    window.alert(this.message);
  }
}
