import {Component, Input, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector:'app-child-on-push-object-challenge',
  standalone:true,
  imports:[],
  templateUrl:'./on-push-object-challenge.component.html',
  styleUrl:'./on-push-object-challenge.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushObjectChallenge{
  constructor(){};
  @Input() isDone:boolean=false;
  @Input() text:string='';
}
