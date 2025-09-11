import {Component, ViewEncapsulation, Input, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector:'view-child-5',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./view-child-5.component.html',
  styleUrl:'./view-child-5.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ViewChild5Component{
  constructor(){};
  @Input() childName!:string;
  public childMessage!:string;
  public greet=():void=>{
    window.alert(`${this.childName} say: ${this.childMessage}`)
  }
}
