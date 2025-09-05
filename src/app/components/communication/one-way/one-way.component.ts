import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
@Component({
  selector:'one-way-communication-component',
  standalone:true,
  imports:[],
  templateUrl:'./one-way.component.html',
  styleUrl:'./one-way.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OneWayCommunicationComponent{
  constructor(){};
  @Input() name!:string;
  @Input() age!:number;
}

