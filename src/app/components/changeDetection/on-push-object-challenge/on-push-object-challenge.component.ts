import {Component, Input, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
interface todo{
  id:number;
  text:string;
  done:boolean;
}
@Component({
  selector:'app-root',
  standalone:true,
  imports:[],
  templateUrl:'./on-push-object-challenge.component.html',
  styleUrl:'./on-push-object-challenge.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushObjectChallengeComponent{
  constructor(){};
  public myTodo:todo={id:1, text:'learn angular', done:false};
}
