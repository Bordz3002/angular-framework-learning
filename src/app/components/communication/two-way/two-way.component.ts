import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector:'two-way-component',
  standalone:true,
  imports:[],
  templateUrl:'./two-way.component.html',
  styleUrl:'./two-way.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TwoWayComponent{
  constructor(){};
  @Input() value!:string;
  @Output() valueChange=new EventEmitter<string>();
  public onInputChange=(event:Event):void=>{
    const input=event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
