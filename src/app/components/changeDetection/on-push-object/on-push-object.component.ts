import {Component, Input,  ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector:'app-child-on-push-object',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./on-push-object.component.html',
  styleUrl:'./on-push-object.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushObjectComponent{
  constructor(){};
  @Input() userConfig:Record<string, string|number>={};
}
