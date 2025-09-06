import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector:'two-way-communication-p2-component',
  standalone:true,
  imports:[],
  templateUrl:'./two-way-p2.component.html',
  styleUrl:'./two-way-p2.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TwoWayP2Component{
  constructor(){};
  @Input() count!:number;
  @Output() countChange=new EventEmitter<number>();
  public increase=():void=>{
    this.countChange.emit(++this.count);
  }
  public decrease=():void=>{
    if(this.count!==0){ this.countChange.emit(--this.count)}
  }
}
