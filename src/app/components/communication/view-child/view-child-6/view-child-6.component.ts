import {Component, Input} from '@angular/core';
@Component({
  selector:'view-child-6-component',
  standalone:true,
  imports:[],
  templateUrl:'./view-child-6.component.html',
  styleUrl:'./view-child-6.component.css'
})
export class ViewChild6Component{
  constructor(){};
  @Input() componentName!:string;
  public message:string='default message';
  public updateMessage=(newMessage:string):void=>{
    this.message=newMessage;
  }
  public greet=():void=>{
    window.alert(`${this.componentName}: says ${this.message}`);
  }
}
