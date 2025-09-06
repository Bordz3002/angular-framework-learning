import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
interface User{
  name:string;
  email:string;
}
@Component({
  selector:'two-way-communication-object-component',
  standalone:true,
  imports:[],
  templateUrl:'./two-way-object.component.html',
  styleUrl:'./two-way-object.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TwoWayObjectComponent{
  constructor(){};
  @Input() user!:User;
  @Output() userChange=new EventEmitter<User>();
  public updateUser=(field:keyof User, event:Event):void=>{
    const input=event.target as HTMLInputElement;
    this.userChange.emit({...this.user, [field]:input.value});
  }
}
