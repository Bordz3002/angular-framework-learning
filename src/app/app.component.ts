import {Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, AfterViewInit} from '@angular/core';
import {ViewChild1Component} from './components/communication/view-child/view-child-1/view-child-1.component';
import { throwIfEmpty } from 'rxjs';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ViewChild1Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements AfterViewInit{
  constructor(){};
  public message!:string;
  @ViewChild(ViewChild1Component) viewChild1Component!:ViewChild1Component;
  ngAfterViewInit(){
    setTimeout(():void=>{this.message=this.viewChild1Component.text}, 1000);
  }
}
