import {Component, ViewEncapsulation, ViewChild, AfterViewInit} from '@angular/core';
import {ViewChild2Component} from './components/communication/view-child/view-child-2/view-child-2.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ViewChild2Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements AfterViewInit{
  constructor(){};
  @ViewChild(ViewChild2Component) viewChild2Component!:ViewChild2Component;
  ngAfterViewInit(){
    this.viewChild2Component.notify();
  }
  public notify=():void=>{
    this.viewChild2Component.notify();
  }
}
