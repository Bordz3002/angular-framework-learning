import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
interface config{
  name:string;
  age:number;
  email:string;
}
@Component({
  selector:'one-way-communication-object-challenge',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./one-way-communication-object-challenge.component.html',
  styleUrl:'./one-way-communication-object-challenge.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OneWayCommunicationObjectChallengeComponent{
  constructor(){};
  @Input() user!:config;
  public getUserEntries=():{key:string; value:any}[]=>{
    return Object.entries(this.user).map(([key, value])=>({key, value}));
  }
}
