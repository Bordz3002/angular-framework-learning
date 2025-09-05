import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector:'one-way-communication-challenge-component',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./one-way-challenge.component.html',
  styleUrl:'./one-way-challenge.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OneWayChallengeComponent{
  constructor(){};
  @Input() text!:string;
}
