import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
@Component({
  selector:'content-child-challenge',
  standalone:true,
  imports:[],
  templateUrl:'./challenge.component.html',
  styleUrl:'./challenge.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildChallenge{
  constructor(){};
}
