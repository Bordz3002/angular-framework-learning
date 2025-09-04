import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector:'app-child-on-push',
  standalone:true,
  imports:[],
  templateUrl:'./on-push.component.html',
  styleUrl:'./on-push.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushComponent{
  constructor(){};
  @Input() message:string='';
}
