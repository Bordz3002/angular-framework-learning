import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector:'view-child-8-challenge-component',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./view-child-8-challenge.component.html',
  styleUrl:'./view-child-8-challenge.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ViewChild8ChallengeComponent{
  constructor(){};
  @Input() componentTaskName!:string;
  public emptyAlert():void{
    window.alert('empty input!');
  }
}
