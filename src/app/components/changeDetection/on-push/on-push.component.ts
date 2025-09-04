import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
@Component({
  selector:'app-child-on-push',
  standalone:true,
  imports:[],
  templateUrl:'./on-push.component.html',
  styleUrl:'./on-push.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushComponent{
  constructor(){}
  @Input() count:number=0;
  public increment=():void=>{
    ++this.count;
  }
}
