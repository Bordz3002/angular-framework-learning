import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector:'two-way-challenge-component',
  standalone:true,
  imports:[],
  templateUrl:'./two-way-challenge.component.html',
  styleUrl:'./two-way-challenge.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TwoWayChallengeComponent{
  constructor(){};
  @Input() username!:string;
  @Output() usernameChange=new EventEmitter<string>();
  public onInputUsername=(event:Event):void=>{
    const input=event.target as HTMLInputElement;
    this.usernameChange.emit(input.value);
  }
}
